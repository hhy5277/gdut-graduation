import {HashRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

import Basic from './main/Basic';
import Employ from './main/Employ';
import Rise from './main/Rise';
import Summary from './main/Summary';

export default class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HashRouter>
            <Switch>
                <Route path='/' exact component={Summary} />
                <Route path="/basic" exact component={Basic} />
                <Route path="/rise" exact component={Rise} />
                <Route path="/employ" exact component={Employ} />
            </Switch>
        </HashRouter>;
    }
}
