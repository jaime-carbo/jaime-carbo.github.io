import React from 'react';
import './Header.css';
function Header(props) {
    return (
        <header  title = "My portfolio" className='header'>
        <h1>{props.title}</h1>
        </header>
    );
}

export default Header;