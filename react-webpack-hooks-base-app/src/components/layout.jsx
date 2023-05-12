import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react';

import Header from './header.jsx'

function Layout(props) {

    let [title, setTitle] = useState(props.title||'');
    let [body, setBody] = useState(props.body||'');

    return (
        <>
            <Header title={ title } />
            { body }

            <fieldset>
                <input type="text" value={ title } onChange={ e => setTitle(e.target.value) }/>
                <input type="text" value={ body } onChange={ e => setBody(e.target.value) }/>
            </fieldset>
        </>
    );
}

export default hot(Layout);

