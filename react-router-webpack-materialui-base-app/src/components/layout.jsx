import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { HashRouter as Router, Link as RouterLink, Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import MenuIcon from '@material-ui/icons/Menu';
import BarChartIcon from '@material-ui/icons/BarChart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';

//** this use of makeStyles() takes the theme as an argument
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1, 2),
        flexGrow: 1,

        '& h2': {
            margin: theme.spacing(1),
            color: '#000'
        }
    },

    grow: { flexGrow: 1 },

    toolbarIcon: {
        color: theme.palette.common.white,
        marginLeft: theme.spacing(2)
    },

    menuIcon: {
        marginRight: theme.spacing(2),
        color: theme.palette.common.white
    },

    dividers: {
        margin: theme.spacing(4, 0)
    },
}));


function Layout(props) {
    props = props||{};

    //** use state via the hooks api
    const [title, setTitle] = useState(props.title||'No Title');

    //** you do *not* need to pass the theme; makeStyles uses .bind() to inject it automatically
    let styles = useStyles(); 

    const Header = () => (
        <AppBar position="static">
            <Toolbar>
                <IconButton className={ styles.menuIcon }>
                    <MenuIcon/>
                </IconButton>
                
                <Typography variant="h5">{ title }</Typography>

                <div className={ styles.grow }/>
                
                <IconButton component={ RouterLink } className={ styles.toolbarIcon } to="/dashboard">
                    <BarChartIcon/>
                </IconButton>

                <IconButton component={ RouterLink } className={ styles.toolbarIcon } to="/users">
                    <SupervisorAccountIcon/>
                </IconButton>

                <IconButton component={ RouterLink } className={ styles.toolbarIcon } to="/settings">
                    <SettingsIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );

    const Dashboard = () => (
        <React.Fragment>
            <Typography variant="h1">h1 - Demo Material UI Site</Typography>
            <Typography variant="h2">h2 - Demo Material UI Site</Typography>
            <Typography variant="h3">h3 - Demo Material UI Site</Typography>
            <Typography variant="h4">h4 - Demo Material UI Site</Typography>
            <Typography variant="h5">h5 - Demo Material UI Site</Typography>
            <Typography variant="h6">h6 - Demo Material UI Site</Typography>

            <Divider className={ styles.dividers }/>

            <Typography variant="subtitle1">subtitle1 - Demo Material UI Site</Typography>
            <Typography variant="subtitle2">subtitle2 - Demo Material UI Site</Typography>
            <Typography variant="button" display="block">button - Demo Material UI Site</Typography>
            <Typography variant="caption" display="block">caption - Demo Material UI Site</Typography>
            <Typography variant="overline" display="block">overline - Demo Material UI Site</Typography>
        </React.Fragment>
    );

    return (
        <Router>
            <React.Fragment>

                <Header/>
                <div className={ styles.root }>

                    <Switch>
                        <Route path="/dashboard" component={ Dashboard } />
                        <Route path="/users" component={() => (<h2>users</h2>)} />
                        <Route path="/settings" component={() => (<h2>settings</h2>)} />
                        <Redirect from="/" to="/dashboard"/>
                    </Switch>

                </div>

            </React.Fragment>
        </Router>
    );
}

export default hot(Layout);
