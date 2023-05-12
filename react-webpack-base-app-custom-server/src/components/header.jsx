import React from 'react';
import css from '../css/header.module.css';

function Header({ title }) {

    return (
        <header className={ css.green }><h1>{title}</h1></header>
    );
}

export default Header

