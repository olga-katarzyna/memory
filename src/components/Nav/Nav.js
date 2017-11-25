import React from 'react';
import {
    NavLink
} from 'react-router-dom';

import './Nav.scss';

/*  
    Przykład ten, jak i kilka innych, wykorzystuje Stateless Functional Components.
    Ich zapis jest też mocno uproszczony (Arrow Functions z ES6).
    Standardowy zapis wyglądałby tak:

    export function Nav() {
        return (
            [...]
        )
    }
*/

export const Nav = (props) => {
    return (
        <nav className={`main-navigation main-navigation--${props.colorTheme}`}>
            <NavLink className='main-navigation__item' exact to='/'>Home</NavLink>
            <NavLink className='main-navigation__item' to='/users'>Users</NavLink>
            <NavLink className='main-navigation__item' to='/contact'>Contact</NavLink>
        </nav>
    )
};