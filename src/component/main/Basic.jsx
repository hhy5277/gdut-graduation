import React from 'react';
import echarts from 'echarts';

export default class Basic extends React.Component {
    constructor(props) {
        super(props);
    }

    myEchart1 = ()=>{
        const myEchart1 = echarts.init(this.refs.myEchart1);
        const options = {
            title: {
                text: '毕业生规模'
            },
            tooltip: {},
            xAxis: {
                data: ['2016本科生', '2017本科生', '2018本科生', '2016研究生', '2017研究生', '2018研究生']
            },
            yAxis: {},
            series: [
                {
                    name: '毕业生规模',
                    type: 'bar',
                    data: [10116, 9963, 10057, 1208, 1376, 1314],
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    }
                }
            ]
        };

        myEchart1.setOption(options);
    };

    myEchart2 = ()=>{
        const myEchart2 = echarts.init(this.refs.myEchart2);

        myEchart2.setOption({
            title: {
                text: '2016-2018毕业生学院分布'
            },
            tooltip: {},
            series: [
              {
                name: "2016毕业生学院分布",
                type: 'pie',
                roseType: 'angle', // 设置成南丁格尔图
                radius: '55%',
                data: [
                  {value: 5492, name: '管理学院'},
                  {value: 3096, name: '自动化学院'},
                  {value: 2988, name: '机电工程学院'},
                  {value: 2674, name: '材料与能源学院'},
                  {value: 2645, name: '土木与交通工程学院'},
                  {value: 2545, name: '信息工程学院'},
                  {value: 2746, name: '艺术设计学院'},
                  {value: 2273, name: '轻工化工学院'},
                  {value: 2660, name: '计算机学院'},
                  {value: 1416, name: '经济与贸易学院'},
                  {value: 1185, name: '物理与光电工程学院'},
                  {value: 1014, name: '环境科学与工程学院'},
                  {value: 999, name: '外国语学院'},
                  {value: 825, name: '政法学院'},
                  {value: 881, name: '应用数学学院'},
                  {value: 595, name: '建筑与城市规划学院'}
                ]
              }
            ]
          });
    };

    myEchart3 = ()=>{};

    componentDidMount() {
        this.myEchart1();
        this.myEchart2();
        this.myEchart3();
    }

    render() {
        return <div className="article">
            <h1>毕业生就业基本情况</h1>
            <div class="contents">
                <p>
                    2016届毕业生共11324 人, 其中研究生1208人. 2017届毕业生共11339 人, 与2016届基本持平, 其中研究生1376人. 2018届毕业生共11371 人, 与2017届基本持平, 其中研究生1314人.
                </p>
                <p>
                    2016-2018年毕业生总人数占比前五位分别是管理学院, 自动化学院, 机电工程学院, 艺术设计学院, 材料与能源学院.
                </p>
                <div ref="myEchart1" style={{width: '100%', height: '400px'}}></div>
                <div ref="myEchart2" style={{width: '100%', height: '400px'}}></div>
                <div ref="myEchart3" style={{width: '100%', height: '400px'}}></div>
            </div>
        </div>;
    }
}