import React from 'react';
import echarts from 'echarts';
import {graduateSize, graduateCollege, graduateGender, collegeGender} from './echartOptions';

export default class Basic extends React.Component {
    constructor(props) {
        super(props);
    }

    myEchart = (item, options)=>{
        const myEchart = echarts.init(item);
        myEchart.setOption(options);
    };

    componentDidMount() {
        this.myEchart(this.refs.graduateSize, graduateSize);
        this.myEchart(this.refs.graduateCollege, graduateCollege);
        this.myEchart(this.refs.graduateGender, graduateGender);
        this.myEchart(this.refs.collegeGender, collegeGender);
    }

    render() {
        return <div>
            <h1>毕业生基本情况</h1>
            <div class="details">

                <h2>2016年-2018年毕业生规模</h2>
                <p>2016届毕业生共11324 人, 其中研究生1208人. 截止 2016 年 12 月 10 日，我校 2016 届毕业生的总体就业率为 97.33%。</p>
                <p>2017届毕业生共11339 人, 与2016届基本持平, 其中研究生1376人. 截止 2017 年 12 月 10 日，我校 2017 届毕业生的总体就业率为 97.77%。</p>
                <p>2018届毕业生共11371 人, 与2017届基本持平, 其中研究生1314人. 截至 2018 年 12 月 10 日，我校 2018 届毕业生的总体就业率为 96.46%。</p>
                <p>高校毕业生的就业率计算公式为：毕业生就业率=（已就业毕业生人数÷毕业生总人数）×100%（已就业毕业生包括：落实就业单位、升学、出国、灵活就业）。就业人数包括企业单位就业，事业单位就业，机关、部队、党群及政法系统就业，其他就业形式就业，升学及出国（境）。</p>
                <div ref="graduateSize" style={{width: '100%', height: '300px'}}></div>
                <p>注：2016年至2018年，广东工业大学毕业生人数变化不大，相比广东省内其它高校，广工的毕业生人数较多，每年广工都为社会贡献了一股庞大的新生力量。</p>

                <h2>2016年-2018年毕业生学院分布</h2>
                <div ref="graduateCollege" style={{width: '100%', height: '300px'}}></div>
                <p>注：2016-2018年毕业生总人数占比前五位分别是管理学院，自动化学院，机电工程学院，艺术设计学院，材料与能源学院。广东工业大学号称以工科为主，没想到这三年的毕业生总人数最多的竟然是管理学院，2016年-2018年管理学院一共送走了5492位毕业生，比第二名的自动化学院足足多了2396人。</p>

                <h2>毕业生性别结构</h2>
                <div ref="graduateGender" style={{width: '100%', height: '300px'}}></div>
                <p>注：2016年至2018年毕业生总体男女性别比分别为 2.19﹕1，2.18﹕1，2.15﹕1。这意味着每三个毕业生中大概有两个男生一个女生，广工男女的比例搭配并没有严重失衡，不准你们再说我校是和尚庙！不过相比华南农业大学和华南理工大学，我校男女比例还是高了一点点（当那一点点乘以一个大基数时，我哭了）。</p>
                <div ref="collegeGender" style={{width: '100%', height: '600px'}}></div>
                <p>注：女生人数最多的学院基本都在龙洞校区，男生人数最多的学院基本都在大学城校区，学院之间的男女比例差异导致了校区之间男女比例严重失衡，大学城校区成了大家口中的和尚庙，龙洞校区成了尼姑庵。身处大学城的我表示心塞塞呀~~</p>
            </div>
        </div>;
    }
}