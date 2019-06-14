import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

//** layout and components
import Layout from './components/layout.jsx'

//** application styles
import css from './css/global.css';

//** define the app level theme (move this to an import)
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#265b6a'
        },

        secondary: {
            main: '#2a7e43'
        }
    }
})

console.log('using theme: ', theme);

let App = () => (
    <ThemeProvider theme={theme}>
        <Layout 
            title="React MaterialUI Demo App" 
            body=""
        />
    </ThemeProvider>
);

ReactDOM.render(App(), document.getElementById('root'));
