import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { AppStateProvider } from '../context.js';

//** layout and components
import Themes from '../themes.js';
import Layout from '../views/layout.jsx'

//** application styles
import css from '../css/global.css';

console.log('using theme: ', Themes.Default);

let App = () => (
    <ThemeProvider theme={ Themes.Default }>
        <CssBaseline />

        <AppStateProvider>
            <Layout 
                title="React MaterialUI Demo App" 
                body=""
            />
        </AppStateProvider>
    </ThemeProvider>
);

ReactDOM.render(App(), document.getElementById('root'));
