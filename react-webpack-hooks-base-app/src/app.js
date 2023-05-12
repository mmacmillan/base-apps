import React from 'react'
import ReactDOM from 'react-dom'
import { AppStateProvider } from './lib/context.js';

const ROOT_NODE = document.getElementById('root');

//** layout and components
import Layout from './components/layout.jsx'

//** application styles
import css from './css/global.css';

let App = () => (
    <AppStateProvider>
        <Layout 
            title="this is the title!" 
            body="this is the body!"
        />
    </AppStateProvider>
);

ReactDOM.render(App(), ROOT_NODE);

