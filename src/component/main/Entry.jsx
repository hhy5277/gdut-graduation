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
                <li><a href="#/basic">毕业生基本情况</a></li>
                <li><a href="#/rise">升学情况</a></li>
                <li><a href="#/employ">就业单位和就业薪酬</a></li>
            </ul>
        </div>;
    }
}