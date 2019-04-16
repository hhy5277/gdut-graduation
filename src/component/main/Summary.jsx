import React from 'react';

export default class Summary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>综述</h1>
            <div className="details">
                <h2>学校简介</h2>
                <p><a href="http://www.gdut.edu.cn/" target="_blank" rel="noopener noreferrer">广东工业大学</a>，简称广工，是广东省一所以工科为主、工理经管文法结合的、多科性协调发展的大学。主校区位于广州市广州大学城。</p>
                <p>目前，学校共设有 20 个学院、4 个公共课教学部(中心)、5 个博士后科研流动站、4 个省攀峰重点学科一级学科、6 个省优势重点学科一级学科、5 个省特色重点学科二级学科、7 个一级学科博士学位授权点、31 个二级学科博士学位授权点、23个一级学科硕士学位授权点、92 个二级学科硕士学位授权点，具有工程（17 个领域）、工商管理、工程管理、会计、翻译、社会工作、金融、艺术 8 种硕士专业学位授予权，同时具有同等学力人员申请硕士学位授予权。机械、信息、材料、化工四个学科为广东省“211 工程”三期重点建设学科。2015 年学校整体进入广东省高水平大学与高水平理工大学建设行列。目前已有工程学、材料科学、计算机科学进入 ESI 全球学科排名前 1%行列，其中工程学已进入 3.3‰。</p>
                <p>面对大学生就业工作突显的新形势、新问题，广东工业大学培养了一批适合区域发展需求、与产业深化改革发展高度契合的行业工匠, 为推进经济社会高质量发展而努力奋斗。</p>
                <p></p>
                <h2>数据来源</h2>
                <p>2016年数据一方面来源于广东工业大学毕业生就业信息数据，数据统计截止日期为 2016 年 12 月 10 日，使用数据主要涉及毕业生的规模和结构、就业率、毕业去向、就业流向等；另一方面来源于第三方数据调查公司中科易研（北京）科技股份有限公司（以下简称“中科易研”）调研数据，调研面向全校 2016 届毕业生开展，自 2016 年 11 月 10 日至 2016 年 12 月 9 日，历时 1 个月，共回收有效问卷 1724 份，回收率 15.22%。</p>
                <p>2017年数据一方面来源于广东工业大学毕业生就业信息数据，数据统计截止日期为 2017 年 12 月 10 日，使用数据主要涉及毕业生的规模和结构、就业率、毕业去向、就业流向等；另一方面来源于第三方数据调查公司北京睿新中科教育科技有限公司（以下简称“睿新中科”）对 2017 届毕业生和用人单位进行调研。</p>
                <p>2018年数据一方面来源于广东工业大学毕业生就业信息数据，数据统计截止日期为 2018 年 12 月 10 日，使用数据主要涉及毕业生的规模和结构、就业率、毕业去向、就业流向等；另一方面来源于睿新中科对 2018 届毕业生和用人单位进行调研。调研于 2018年 11 月 8 日至 12 月 5 日进行，共邀请 11371 名毕业生参加，回收有效问卷 5534份，回收率为 48.67%；向 254 个用人单位进行有效调查。</p>
            </div>
        </div>;
    }
}