import React from 'react'
import ReactDOM from 'react-dom'

//** layout and components
import Layout from './components/layout.jsx'

//** application styles
import css from './css/global.css';


const ROOT_NODE = document.getElementById('root');

function handleSetTitle(title) {
    console.log('title has been set to: ', title);
}

let App = () => (
    <Layout 
        title="Work Organizer" 
        body=""
        onSetTitle={handleSetTitle}
    />
);

ReactDOM.render(App(), ROOT_NODE);
