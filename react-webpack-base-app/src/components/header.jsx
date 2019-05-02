import React from 'react';
import { StyleSheet, css } from 'aphrodite';

/** 
    the header is a simple component, meant to be used by higher order components...using 
    only properties, not local state, for rendering
**/

class Header extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let title = this.props.title || '';

        return (
            <header className={ css(X.header) }><h1>{title}</h1></header>
        );
    }
}

const X = StyleSheet.create({
    header: {
        color: '#8BA446',
        'text-shadow': '1px 1px 3px rgba(0,0,0,.3)'
    }
});

export default Header
