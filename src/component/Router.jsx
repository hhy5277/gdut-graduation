import {HashRouter, Switch, Route} from 'react-router-dom';
import React from 'react';

import Basic from './main/Basic';
import Evaluation from './main/Evaluation';
import Quality from './main/Quality';
import Summary from './main/Summary';
import Teach from './main/Teach';
import Trend from './main/Trend';

export default class Router extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HashRouter>
            <Switch>
                <Route path='/' exact component={Summary} />
                <Route path="/basic" exact component={Basic} />
                <Route path="/quality" exact component={Quality} />
                <Route path="/evaluation" exact component={Evaluation} />
                <Route path="/teach" exact component={Teach} />
                <Route path="/trend" exact component={Trend} />
            </Switch>
        </HashRouter>;
    }
}
