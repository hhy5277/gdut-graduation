import React from 'react';

export default class Entry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="entry">
            <p>目录</p>
            <ul>
                <li><a href="#/">综述</a></li>
                <li><a href="#/basic">毕业生就业基本情况</a></li>
                <li><a href="#/quality">就业质量相关分析</a></li>
                <li><a href="#/evaluation">用人单位满意度分析</a></li>
                <li><a href="#/trend">就业发展趋势分析</a></li>
                <li><a href="#/teach">毕业生对教学的反馈</a></li>
            </ul>
        </div>;
    }
}