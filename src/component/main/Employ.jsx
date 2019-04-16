import React from 'react';
import echarts from 'echarts';

import {industry, companySize, graduateJob, salary, collegeSalary} from './echartOptions';

export default class Evaluation extends React.Component {
    constructor(props) {
        super(props);
    }

    myEchart = (item, options)=>{
        const myEchart = echarts.init(item);
        myEchart.setOption(options);
    };

    componentDidMount() {
        this.myEchart(this.refs.industry, industry);
        this.myEchart(this.refs.companySize, companySize);
        this.myEchart(this.refs.graduateJob, graduateJob);
        this.myEchart(this.refs.salary, salary);
        this.myEchart(this.refs.collegeSalary, collegeSalary);
    }

    render() {
        return <div>
            <h1>就业单位和就业薪酬</h1>
            <div className="details">
                <h2>2016-2018本科生就业主要行业分布</h2>
                <div ref="industry" style={{width: '100%', height: '300px'}}></div>
                <p>注：顺应时代潮流，我校本科毕业生大部分选择了热门的互联网相关行业就业。</p>

                <h2>2016-2018就业单位规模分布</h2>
                <div ref="companySize" style={{width: '100%', height: '300px'}}></div>
                <p>注：如果企业员工超过500人算作大厂的话，那么我校有超过一半的毕业生入职大厂。</p>

                <h2>2016-2017主要职业类型分布</h2>
                <div ref="graduateJob" style={{width: '100%', height: '300px'}}></div>

                <h2>2016-2018本科生就业薪酬分布</h2>
                <div ref="salary" style={{width: '100%', height: '300px'}}></div>

                <h2>2016-2018各学院毕业生薪酬</h2>
                <div ref="collegeSalary" style={{width: '100%', height: '1200px'}}></div>
                <p>注：自动化学院、信息工程学院、计算机学院就业平均薪酬领跑其它学院，我校大部分学院的平均薪酬逐年增长，除了政法学院和艺术设计学院。</p>
            </div>
        </div>;
    }
}