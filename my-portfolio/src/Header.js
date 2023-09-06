import React from 'react';
import './Header.css';
import Navigation from './Navigation';

function Header(props) {
    return (
        <header  title = "My portfolio" className='header'>
        <h1>{props.title}</h1>
        <Navigation />
        </header>
    );
}

export default Header;