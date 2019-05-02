import React from 'react';

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
            <header><h1>{title}</h1></header>
        );
    }
}

export default Header
