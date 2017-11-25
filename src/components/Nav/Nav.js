import React from 'react';
import {
    NavLink
} from 'react-router-dom';

import './Nav.scss';

export const Nav = () => {
    return (
        <nav className='main-navigation'>
            <NavLink className='main-navigation__item' exact to='/'>Home</NavLink>
            <NavLink className='main-navigation__item' to='/users'>Users</NavLink>
            <NavLink className='main-navigation__item' to='/contact'>Contact</NavLink>
        </nav>
    )
};