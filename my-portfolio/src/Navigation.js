import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
      <nav className="navigation">
        <NavLink to="/" className="nav-link" activeclassname="active">Home</NavLink>
        <NavLink to="/portfolio" className="nav-link" activeclassname="active">Portfolio</NavLink>
        <NavLink to="/contact" className="nav-link" activeclassname="active">Contact</NavLink>
        <NavLink to="/curriculum" className="nav-link" activeclassname="active">Curriculum</NavLink>
      </nav>
    );
};

export default Navigation;