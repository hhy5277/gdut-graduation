import React from 'react';
import ReactDOM from 'react-dom';

// 导入css
import './static/css/reset.css';
import './static/css/index.css';

// 导入组件
import Head from './component/Head';
import Main from './component/Main';
import Foot from './component/Foot';

const jsxCode = <div>
    <Head />
    <Main />
    <Foot />
</div>;

ReactDOM.render(jsxCode, document.getElementById('root'));
