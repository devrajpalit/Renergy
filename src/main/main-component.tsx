import * as React from 'react';

import './main-component.scss';
import temperature_map_gl from './temperature-map-gl';
import floor4 from './floor4.png';
import floor7 from './floor7.png';
import Swal from 'sweetalert2';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import * as _ from 'lodash';
import spacetime from 'spacetime';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

import { ChartComponent } from '../chart/chart-component';

import { allTimeZones } from './constants'


interface IProps {
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
    tempPolling: any;
    averageTemps: number[];
    minTemps: number[];
    maxTemps: number[];
    floor: any;
    timeZone: any;
}

class MainComponent extends React.Component<IProps, IState> {

    private Swal = require('sweetalert2');
    private minVal: any;
    private maxVal: any;
    private temperature_map: any;
    private wIn: any;
    private hIn: any;

    private informal = require('spacetime-informal');

    private currentZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    private currentCountry = this.currentZone && this.currentZone.split('/')[0];
    private sortedTimeZones = allTimeZones.sort((a, b) => {
        if (this.currentZone && this.currentZone === a) { return -1 }
        if (this.currentCountry && (a.includes(this.currentCountry) && !b.includes(this.currentCountry))) { return -1 }
        return 0
    })


    public updateTimeZone = (event: any) => {
        const tz = this.informal.display(event.target.value);
        if (!!tz && !!tz.iana) { this.setState({ timeZone: tz.iana }); }
    }

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

    public setFloor = (event: any) => {
        this.setState({ floor: event.target.value });
    }

    public setGreaterOrLesser = (event: any) => {
        this.setState({ greaterOrLesser: event.target.value });
    }

    public setTempPolling = (event: any) => {
        this.setState({ tempPolling: event.target.value });
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

    public computeTemps = (timeArr: any[]) => {
        let averageTemps = [], minTemps = [], maxTemps = [], timeElem, sum, min, max, len = (timeArr[0].length - 1) / 2;
        for (let i = 0; i < timeArr.length; i++) {
            timeElem = timeArr[i];
            sum = 0; min = 1000; max = -1000;
            for (let k = 2; k < timeElem.length; k = k + 2) {
                sum += timeElem[k];
                min = _.min([min, timeElem[k]]);
                max = _.max([max, timeElem[k]]);
            }
            averageTemps[i] = sum / len;
            minTemps[i] = min;
            maxTemps[i] = max;
        }
        console.table([averageTemps, minTemps, maxTemps]);
        return [averageTemps, minTemps, maxTemps];
    }

    public shiftTimeArr = (timeArr: any[]) => {
        const shiftedTimeArr = _.cloneDeep(timeArr);
        shiftedTimeArr.forEach((it) => {
            const z1 = utcToZonedTime(it[0].concat('.000Z'), this.state.timeZone);
            it[0] = format(z1, 'yyyy-MM-dd HH:mm:ss', { timeZone: this.state.timeZone });
        });
        return shiftedTimeArr;
    }

    public getSrcArr = () => {
        switch (this.state.tempPolling) {
            case '1':
                return _.cloneDeep(this.state.averageTemps);
            case '2':
                return _.cloneDeep(this.state.minTemps);
            case '3':
                return _.cloneDeep(this.state.maxTemps);
            default:
                return _.cloneDeep(this.state.averageTemps);
        }
    }

    public getFloorPlan = () => {
        switch (this.state.floor) {
            case 'Fourth':
                return floor4;
            case 'Seventh':
                return floor7;
        }
    }

    public computeGoal = () => {
        if (this.state.tempTarget == null) {
            Swal.fire({
                title: 'Error!',
                text: 'Enter Target Temperature!',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        } else {
            this.setState({ pauseAnimation: true });
            const target = this.state.tempTarget;
            const srcArr: number[] = this.getSrcArr();
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
        let htmlElem = document.getElementById('results');
        if (htmlElem) {
            htmlElem.innerHTML = message;
        }
        this.loop(i);
    }

    public componentWillMount() {
        this.setState({ animationSpeed: 200, pauseAnimation: false, iter: 1, earliestOrLast: 1, greaterOrLesser: 1, tempPolling: 1, floor: 'Fourth', timeZone: this.currentZone });
    }

    public renderMap = () => {
        if (this.state && this.state.startTime && this.state.endTime) {
            document.getElementById('spinner')?.setAttribute("style", "display: inline-block");
            fetch('https://0ade3b7d02db.ngrok.io/api/v1/getData?' + this.getURLParams())
                .then(this.checkStatus)
                .then((response) => response.json())
                .then((data) => {
                    const computedTemps = this.computeTemps(data.timeArr);
                    const shiftedTimeArr = this.shiftTimeArr(data.timeArr);
                    this.setState({ timeArr: shiftedTimeArr, coordMap: data.coordMap, averageTemps: computedTemps[0], minTemps: computedTemps[1], maxTemps: computedTemps[2] });
                }).then(() => {
                    document.getElementById('spinner')?.setAttribute("style", "display: none");
                    this.run();
                });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Enter start and end time!',
                icon: 'error',
                confirmButtonText: 'Okay'
            });
        }
    };

    public checkStatus(response: any) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            var error: any = new Error(response.statusText)
            error.response = response
            throw error
        }
    }


    public getURLParams = () => {
        return new URLSearchParams([['start', this.timeZoneToGMT(this.state.startTime)], ['end', this.timeZoneToGMT(this.state.endTime)], ['floor', this.state.floor]]);
    }

    public timeZoneToGMT = (tzDate: string): string => {
        return zonedTimeToUtc(tzDate, this.state.timeZone).toISOString().substr(0, 16);
    }

    public render() {
        if (this.isInitialized()) {
            return (
                <div className="main-component">
                    <div className="container-fluid row">
                        <div className="col-1"></div>
                        <div className="col-6">
                            <div className="row my-2">
                                <div className="col-12">
                                    <div className='map-container'>
                                        <img id='map-image' src={this.getFloorPlan()} width='100%' alt="Unable to load!" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="progress">
                                    <div id="progress-bar" className="progress-bar progress-bar-striped"></div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-12">
                                    <div className="btn-group float-left" role="group" aria-label="Play Control">
                                        <button type="button" className="btn btn-secondary" onClick={this.stepBack}>{'<'}</button>
                                        <button type="button" className="btn btn-secondary" onClick={this.setPlayPause}>Play/Pause</button>
                                        <button type="button" className="btn btn-secondary" onClick={this.stepAhead}>{'>'}</button>
                                    </div>
                                    <span id="time-stamp" />

                                    <div className="btn-group float-right" role="group" id="speed-buttons" aria-label="Play Speed">
                                        <button type="button" className="btn btn-secondary" id="H" onClick={this.setanimationSpeed.bind(this, 100)}>H</button>
                                        <button type="button" className="btn btn-secondary active" id="M" onClick={this.setanimationSpeed.bind(this, 200)}>M</button>
                                        <button type="button" className="btn btn-secondary" id="S" onClick={this.setanimationSpeed.bind(this, 300)}>S</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-12">
                                    <ChartComponent timeArr={this.state.timeArr} coordMap={this.state.coordMap} animationSpeed={this.state.animationSpeed} />
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row my-2">
                                <div className="col-12">
                                    <h5 className="float-left">Data Analysis Range</h5>
                                    <div className="input-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text timer-prepend">TZ</span>
                                            </div>
                                            <input list="timezones-select" name="timezones-select" className="form-control" defaultValue={this.state.timeZone} onChange={this.updateTimeZone.bind(this)}></input>
                                            <datalist hidden className="form-control" id="timezones-select">
                                                {this.sortedTimeZones.map(timezone => (
                                                    <option key={timezone} value={timezone}>
                                                        {timezone}
                                                    </option>
                                                ))}
                                            </datalist>
                                        </div>

                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text timer-prepend">Start</span>
                                            </div>
                                            <input className="form-control datepicker" type="datetime-local" onInput={this.updateStartTime.bind(this)} />
                                        </div>

                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text timer-prepend">End</span>
                                            </div>
                                            <input className="form-control datepicker" type="datetime-local" onInput={this.updateEndTime.bind(this)} />
                                        </div>

                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text timer-prepend" htmlFor="inputGroupSelect00">Floor</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect00" defaultValue={'Fourth'} onChange={this.setFloor.bind(this)}>
                                                <option value="Fourth">Fourth</option>
                                                <option value="Seventh">Seventh</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row my-2">
                                <div className="col-12">
                                    <div className="input-group">
                                        <button className="btn btn-primary" type="button" onClick={this.renderMap}>
                                            Submit <span id="spinner" className="spinner-border spinner-border-sm" style={{ display: "none" }} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row my-2">
                                <div className="col-12">
                                    <h5 className="float-left">Temperature Goal Finder</h5>
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

                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect02">For Temp to be</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect02" defaultValue={1} onChange={this.setGreaterOrLesser.bind(this)}>
                                                <option value="1">{'>'}</option>
                                                <option value="2">{'<'}</option>
                                            </select>
                                            <input type="text" className="form-control temp-target" placeholder="Target Temperature" aria-label="Temp Target" onChange={this.setTempTarget.bind(this)} />
                                        </div>

                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <label className="input-group-text" htmlFor="inputGroupSelect03">Select Temp Polling</label>
                                            </div>
                                            <select className="custom-select" id="inputGroupSelect03" defaultValue={1} onChange={this.setTempPolling.bind(this)}>
                                                <option value="1">Avg</option>
                                                <option value="2">Min</option>
                                                <option value="3">Max</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-4 mb-2">
                                    <div className="input-group">
                                        <input className="btn btn-primary" type="button" value="Compute" onClick={this.computeGoal}></input>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div id='results'></div>
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
        if (i < this.state.timeArr.length && i > -1) {
            await this.timer(this.state.animationSpeed);
            let timeElem = this.state.timeArr[i];
            let points = [];

            for (let k = 1; k < timeElem.length; k = k + 2) {
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

            const timeStampEle = document.getElementById("time-stamp");
            if (timeStampEle) {
                timeStampEle.innerHTML = timeElem[0] + ' ' + this.state.timeZone;
            }
            document.getElementById("progress-bar")?.setAttribute("style", `width: ${Math.ceil(100 * (i + 1) / this.state.timeArr.length)}%`);
            // document.getElementById("time-stamp").innerHTML = timeElem[0];
            i++;
            if (this.state.pauseAnimation) {
                this.setState({ iter: i });
            } else {
                if (i < this.state.timeArr.length && i > -1) {
                    this.loop(i);
                } else { this.setState({ iter: i - 1, pauseAnimation: true }); }
            }
        }
    }
}

export default MainComponent;
