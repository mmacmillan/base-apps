import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/layout.jsx'

import css from './css/global.css';

const ROOT_NODE = document.getElementById('root');

function handleSetTitle(title) {
    console.log('title has been set to: ', title);
}

let App = () => (
    <Layout 
        title="this is the title!" 
        body="this is the body!"
        onSetTitle={handleSetTitle}
    />
);

let render = () => ReactDOM.render(App(), ROOT_NODE);
render();
