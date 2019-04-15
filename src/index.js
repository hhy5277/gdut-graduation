import React from 'react';
import ReactDOM from 'react-dom';

// 导入css
import './static/css/reset.css';
import './static/css/index.css';

// 导入组件
import Head from './component/Head';
import Main from './component/Main';

const jsxCode = <div>
    <Head />
    <Main />
</div>;

ReactDOM.render(jsxCode, document.getElementById('root'));
