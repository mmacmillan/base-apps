import { hot } from 'react-hot-loader/root';
import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Segment, Container } from 'semantic-ui-react';

import Views from './views';
import AppHeader from './app-header.jsx';

class Layout extends React.Component {
    constructor(props) {
        super();

        this.state = { title: props.title || '' };
    }

    render() {
        return (
            <Router>

                <React.Fragment>
                    <AppHeader title={ this.state.title } />
                    <Container className="content">

                        <Switch>
                            <Route path="/dashboard" component={ Views.Dashboard } />
                            <Route path="/customers" component={ Views.Customers } />
                            <Route path="/calendar" component={ Views.Calendar } />

                            <Redirect from="/" to="/dashboard"/>
                        </Switch>

                    </Container>
                </React.Fragment>

            </Router>
        );
    }
}

export default hot(Layout);
