import * as React from 'react';
import * as _ from 'lodash';
import CanvasJSReact from '../asset/canvasjs.react';


var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


interface IProps {
    timeArr: any[];
    coordMap: any;
    animationSpeed: number;
}

interface IState {
}


export class ChartComponent extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        if (this.props.coordMap != null && this.props.timeArr != null && this.props.timeArr.length > 0) {

            const options = {
                animationEnabled: true,
                animationDuration: (this.props.timeArr.length * this.props.animationSpeed),
                zoomEnabled: true,
                title: {
                    text: ""
                },
                axisY: {
                    title: "Temperature"
                },
                toolTip: {
                    shared: true,
                    animationEnabled: true
                },
                data: this.formatData()
            }

            return (
                <div>
                    <CanvasJSChart options={options} />
                </div>
            );
        } else {
            return (<div></div>);
        }
    }

    formatData() {

        let timeElem, timeArr = _.cloneDeep(this.props.timeArr), dt, sensors = Object.keys(this.props.coordMap);
        // debugger;
        const map1 = new Map();
        for (let i = 0; i < sensors.length; i++) {
            map1.set(sensors[i], []);
        }
        for (let i = 0; i < timeArr.length; i++) {
            timeElem = timeArr[i];
            for (let k = 2; k < timeElem.length; k = k + 2) {
                dt = new Date(timeElem[0]);
                map1.get(timeElem[k - 1]).push({ y: timeElem[k], label: this.getformattedDateTime(timeElem[0]) });
            }
        }
        // debugger;
        let data = [];
        for (let i = 0; i < sensors.length; i++) {
            data.push(
                {
                    type: "spline",
                    name: sensors[i],
                    showInLegend: true,
                    dataPoints: map1.get(sensors[i])
                }
            );
        }
        return data;
    }

    getformattedDateTime(dt: string) {
        const date = new Date(dt);
        const lds = date.toLocaleDateString();
        const ts = date.toTimeString();
        return [lds.substr(0, lds.length - 5), ts.substr(0, ts.length - 34)].join(' ');
    }
}