import React from 'react';

import Entry from './main/Entry';
import Router from './Router';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <main className="center">
            <div className="container">
                <Router />
            </div>
            <Entry />
        </main>;
    }
}