import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        let title = this.props.title || '';

        return (
            <header className="main">
                <h1>{title}</h1>

                <nav>
                    <NavLink to="/dashboard" activeClassName="selected">Home</NavLink>
                    <a href="#">Customers</a>
                    <a href="#">Quarters</a>
                </nav>
            </header>
        );
    }
}

export default Header
