import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './header.jsx';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Views from './views';

class Layout extends React.Component {
    constructor(props) {
        super();

        this.state = { title: props.title || '' };
    }

    render() {
        return (
        <Router>

            <React.Fragment>
                <Header title={ this.state.title }/>
                <div className="content">

                <Switch>
                    <Route path="/dashboard" component={ Views.Dashboard } />
                    <Redirect from="/" to="/dashboard"/>
                </Switch>

                </div>
            </React.Fragment>

        </Router>
        );
    }
}

export default hot(Layout);
