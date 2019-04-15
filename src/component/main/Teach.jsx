import React from 'react';
import echarts from 'echarts';

export default class Teach extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const myEchart = echarts.init(this.refs.myEchart);
        const options = {
            title: {
                text: '入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
            ]
        };

        myEchart.setOption(options);
    }

    render() {
        return <div className="article">
            <h1>毕业生对教学的反馈</h1>
                <p>111111111111111</p>
                <div id="myEchart" ref="myEchart" style={{width: '400px', height: '400px'}}></div>
        </div>;
    }
}