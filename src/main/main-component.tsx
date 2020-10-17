import * as React from 'react';

import './main-component.scss';
import temperature_map_gl from './temperature-map-gl';
import floor4 from './floor4.png';
import Swal from 'sweetalert2';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import * as _ from 'lodash';

interface IProps {
    // countBy?: number;
}

interface IState {
    timeArr: any[];
    coordMap: any;
    startTime: any;
    endTime: any;
    animationSpeed: any;
    pauseAnimation: boolean;
    iter: number;
    tempTarget: number;
    earliestOrLast: any;
    greaterOrLesser: any;
    averageTemps: number[];
}

class MainComponent extends React.Component<IProps, IState> {

    private Swal = require('sweetalert2')
    private minVal: any;
    private maxVal: any;
    private temperature_map: any;
    private wIn: any;
    private hIn: any;


    public updateStartTime = (event: any) => {
        this.setState({ startTime: event.target.value });
    }

    public updateEndTime = (event: any) => {
        this.setState({ endTime: event.target.value });
    }

    public setanimationSpeed = (speed: number) => {
        this.removeActive();
        this.setState({ animationSpeed: speed });
        this.setActive(speed);
    }

    public setTempTarget = (event: any) => {
        this.setState({ tempTarget: event.target.value });
    }

    public setEarliestOrLast = (event: any) => {
        this.setState({ earliestOrLast: event.target.value });
    }

    public setGreaterOrLesser = (event: any) => {
        this.setState({ greaterOrLesser: event.target.value });
    }

    public setPlayPause = () => {
        this.setState({ pauseAnimation: !this.state.pauseAnimation });
        if (this.state.pauseAnimation === false) {
            this.setState({ pauseAnimation: true });
        } else {
            this.setState({ pauseAnimation: false });
            this.loop(this.state.iter);
        }
    }

    public stepBack = () => {
        if (this.state.pauseAnimation) {
            this.loop(this.state.iter - 2);
        }
    }

    public stepAhead = () => {
        if (this.state.pauseAnimation) {
            this.loop(this.state.iter);
        }
    }

    public computeAverageTemps = (timeArr: any[]) => {
        let averageTemps = [], timeElem, sum;
        for (let i = 0; i < timeArr.length; i++) {
            timeElem = timeArr[i];
            sum = 0;
            for (let k = 2; k < timeElem.length; k = k + 2) { sum += timeElem[k]; }
            averageTemps[i] = sum / 9;
        }
        console.log(averageTemps);
        return averageTemps;
    }

    public computeGoal = () => {
        if (this.state.tempTarget == null) {
            alert('enter Target');
        } else {
            this.setState({ pauseAnimation: true });
            const target = this.state.tempTarget;
            const srcArr = _.cloneDeep(this.state.averageTemps);
            const len = srcArr.length; let message;
            let foundFlag = false;

            if (this.state.earliestOrLast == 1 && this.state.greaterOrLesser == 1) {
                for (let i = 0; i < len; i++) {
                    if (srcArr[i] > target) {
                        message = 'Earliest Avg Temp to be > ' + target + ' was ' + srcArr[i] + ' at ' + this.state.timeArr[i][0];
                        this.loopWithMessage(i, message);
                        foundFlag = true;
                        break;
                    }
                }
            } else if (this.state.earliestOrLast == 1 && this.state.greaterOrLesser == 2) {
                for (let i = 0; i < len; i++) {
                    if (srcArr[i] < target) {
                        message = 'Earliest Avg Temp to be < ' + target + ' was ' + srcArr[i] + ' at ' + this.state.timeArr[i][0];
                        this.loopWithMessage(i, message);
                        foundFlag = true;
                        break;
                    }
                }
            } else if (this.state.earliestOrLast == 2 && this.state.greaterOrLesser == 1) {
                for (let i = len - 1; i > 0; i--) {
                    if (srcArr[i] > target) {
                        message = 'Last Avg Temp to be > ' + target + ' was ' + srcArr[i] + ' at ' + this.state.timeArr[i][0];
                        this.loopWithMessage(i, message);
                        foundFlag = true;
                        break;
                    }
                }
            } else if (this.state.earliestOrLast == 2 && this.state.greaterOrLesser == 2) {
                for (let i = len - 1; i > 0; i--) {
                    if (srcArr[i] < target) {
                        message = 'Last Avg Temp to be < ' + target + ' was ' + srcArr[i] + ' at ' + this.state.timeArr[i][0];
                        this.loopWithMessage(i, message);
                        foundFlag = true;
                        break;
                    }
                }
            }
            if (!foundFlag) {
                message = 'Not Found';
                this.loopWithMessage(len - 1, message);
            }
        }
    }

    public loopWithMessage(i: number, message: any) {
        let x = document.getElementById('results');
        if (x) {
            x.innerHTML = message;
            // x.innerHTML = 'Average Temp greater than ' + this.state.tempTarget + 'C found at time = ' + this.state.timeArr[i][0] + 'and temp = ' ;
        }
        this.loop(i);
    }

    public testMethod = () => {
        alert(this.state.animationSpeed);
    }

    public componentWillMount() {
        this.setState({ animationSpeed: 200, pauseAnimation: false, iter: 1, earliestOrLast: 1, greaterOrLesser: 1 });
    }

    public renderMap = () => {
        if (this.state && this.state.startTime && this.state.endTime) {
            Promise.all([
                fetch('api/v1/get-temps?' + this.getURLParams()).then((response) => response.json()),
                fetch('api/v1/get-coord-map?' + new URLSearchParams([['start', this.state.startTime], ['end', this.state.endTime]])).then((response) => response.json())
            ]).then((data) => {

                this.setState({ timeArr: data[0], coordMap: data[1], averageTemps: this.computeAverageTemps(data[0]) });
            }).then(() => { this.run() });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Enter start and end time!',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    };

    public getURLParams = () => {
        return new URLSearchParams([['start', this.state.startTime], ['end', this.state.endTime]]);
    }

    public render() {
        if (this.isInitialized()) {
            return (
                <div className="main-component">
                    <div className="container">
                        <div className="row my-2">
                            <div className="col-12">
                                <div className='map-container'>
                                    <img id='map-image' src={floor4} width='100%' alt="Unable to load!" />
                                </div>
                            </div>
                            <div className="col-3">

                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-12">
                                <div className="btn-group float-left" role="group" aria-label="Play Control">
                                    <button type="button" className="btn btn-secondary" onClick={this.stepBack}>{'<'}</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.setPlayPause}>Play/Pause</button>
                                    <button type="button" className="btn btn-secondary" onClick={this.stepAhead}>{'>'}</button>
                                </div>

                                <div className="btn-group float-right" role="group" id="speed-buttons" aria-label="Play Speed">
                                    <button type="button" className="btn btn-secondary" id="S" onClick={this.setanimationSpeed.bind(this, 100)}>S</button>
                                    <button type="button" className="btn btn-secondary active" id="M" onClick={this.setanimationSpeed.bind(this, 200)}>M</button>
                                    <button type="button" className="btn btn-secondary" id="H" onClick={this.setanimationSpeed.bind(this, 300)}>H</button>
                                </div>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text timer-prepend">Start</span>
                                    </div>
                                    <input className="form-control datepicker" type="datetime-local" onInput={this.updateStartTime.bind(this)} />
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text timer-prepend">End</span>
                                    </div>
                                    <input className="form-control datepicker" type="datetime-local" onInput={this.updateEndTime.bind(this)} />
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-4">
                                <div className="input-group">
                                    <input className="btn btn-primary" type="button" value="Submit" onClick={this.renderMap}></input>
                                </div>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col-4">
                                <h5 className="float-left">Temperature Goal Section</h5>
                                <br></br>
                                <div className="input-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Find</label>
                                        </div>
                                        <select className="custom-select" id="inputGroupSelect01" defaultValue={1} onChange={this.setEarliestOrLast.bind(this)}>
                                            <option value="1">Earliest</option>
                                            <option value="2">Last</option>
                                        </select>
                                        <div className="input-group-append">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Time Stamp</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect02">For Temp to be</label>
                                        </div>
                                        <select className="custom-select" id="inputGroupSelect02" defaultValue={1} onChange={this.setGreaterOrLesser.bind(this)}>
                                            <option value="1">{'>'}</option>
                                            <option value="2">{'<'}</option>
                                        </select>
                                        <input type="text" className="form-control temp-target" placeholder="Temperature Target" aria-label="Temp Target" onChange={this.setTempTarget.bind(this)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div id='results'></div>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="col-4">
                                <div className="input-group">
                                    <input className="btn btn-primary" type="button" value="Compute" onClick={this.computeGoal}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div>Loading. . .</div>);
        }

    }

    private removeActive() {
        document.getElementById('speed-buttons')?.children[0].classList.remove('active');
        document.getElementById('speed-buttons')?.children[1].classList.remove('active');
        document.getElementById('speed-buttons')?.children[2].classList.remove('active');
    }

    private setActive(speed: number) {
        const index = speed / 100 - 1;
        document.getElementById('speed-buttons')?.children[index].classList.add('active');
    }

    private isInitialized() {
        return true || this.state && this.state.timeArr.length > 0;
    }

    private timer(ms: number) {
        return new Promise(res => setTimeout(res, ms));
    }

    private async run() {
        this.wIn = 0;
        this.hIn = 0;

        const image = document.getElementById("map-image");
        if (image) {
            this.wIn = image.clientWidth
            this.hIn = image.clientHeight
        }

        this.minVal = 15;
        this.maxVal = 23.8;

        if (this.temperature_map == null) {
            this.temperature_map = new temperature_map_gl(image, {
                framebuffer_factor: 1,
                show_points: true,
            });
        }

        this.loop(1);

    }

    private async loop(i: number) {

        await this.timer(this.state.animationSpeed);
        let timeElem = this.state.timeArr[i];
        let points = [];
        console.log(timeElem[0]);

        for (let k = 1; k < timeElem.length; k = k + 2) // Skipping the first time elemement, after that things will always come in pairs, so jump in 2 
        {
            points.push([this.state.coordMap[timeElem[k]][0], this.state.coordMap[timeElem[k]][1], timeElem[k + 1], timeElem[k + 1]])
        }

        for (let j = 0; j < points.length; j++) {

            points[j][0] = points[j][0] * 1.0 * this.wIn / 2192;
            points[j][1] = points[j][1] * 1.0 * this.hIn / 1264;

        }


        for (let j = 0; j < points.length; j++) {
            points[j][2] = -50 + (points[j][2] - this.minVal) / (this.maxVal - this.minVal) * 150;
        }

        this.temperature_map.set_points(points);
        this.temperature_map.draw();
        this.temperature_map.context.finish();
        i++;
        if (this.state.pauseAnimation) {
            this.setState({ iter: i });
        } else {
            if (i < this.state.timeArr.length) {
                this.loop(i);
            }
        }
    }
}

export default MainComponent;