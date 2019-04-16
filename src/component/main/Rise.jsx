import React from 'react';
import echarts from 'echarts';

import {graduateWhere, graduateRise, riseCollege} from './echartOptions';

export default class Quality extends React.Component {
    constructor(props) {
        super(props);
    }

    myEchart = (item, options)=>{
        const myEchart = echarts.init(item);
        myEchart.setOption(options);
    };

    componentDidMount() {
        this.myEchart(this.refs.graduateWhere, graduateWhere);
        this.myEchart(this.refs.graduateRise, graduateRise);
        this.myEchart(this.refs.riseCollege, riseCollege);
    }

    render() {
        return <div>
            <h1>升学情况</h1>
            <div className="details">
                <h2>2016年-2018年毕业生去向</h2>
                <div ref="graduateWhere" style={{width: '100%', height: '300px'}}></div>
                <p>注：其他就业形式包括西部计划、三扶一支、科研助理、选调生、自主创业、自由职业等就业形式。我校绝大部分人都选择了到社会上就业，只有少数人选择了升学。</p>
                <div ref="graduateRise" style={{width: '100%', height: '300px'}}></div>

                <h2>2016年-2018年国内升学主要院校</h2>
                <div ref="riseCollege" style={{width: '100%', height: '300px'}}></div>
                <p>注：2016年至2018年，毕业生升学选择最多的还是选择留在本校继续深造，一方面因为考研考本校比较容易，另一方面也说明我校的科研资源丰富，能够吸引聚集到许多优秀的人才。</p>
            </div>
        </div>;
    }
}