import React from 'react';
import { NavLink } from 'react-router-dom';
import { Segment, Header, Menu, Grid, Container } from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';

class AppHeader extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let title = this.props.title || '';

        return (
            <Segment as="header" basic className={['main', css(X.header)]}>
                <Container>
                    <Grid columns="2">
                        <Grid.Column>
                            <Header as="h1" content={title} className={ css(X['page-header']) } />
                        </Grid.Column>

                        <Grid.Column>
                            <Menu as="nav" size="large" floated="right" widths="3">
                                <Menu.Item as={ NavLink } to="/dashboard" activeClassName="active">Dashboard</Menu.Item>
                                <Menu.Item as={ NavLink } to="/calendar" activeClassName="active">Calendar</Menu.Item>
                                <Menu.Item as={ NavLink } to="/customers" activeClassName="active">Customers</Menu.Item>
                            </Menu>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

const X = StyleSheet.create({
    'header': {
        'background-color': '#fff',
        'box-shadow': '0 1px 3px rgba(0,0,0,.3), 0 1px #ccc'
    },
    'page-header': {
        'font-size': '2.5rem'
    }

});

export default AppHeader
