import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './header.styles.css';

function Header () {

    const {pathname}=useLocation();
    
    return(<ul className='header'>
        <li className={`logo ${pathname==='/'?'black-background':null}`}>
            <Link to='/'>
                <i class="fas fa-terminal"></i> Leonardo Villalba
            </Link>  
        </li>
        <li className={`${pathname==='/things-you-might-want'?'black-background':' '}`}>
            <Link to='/things-you-might-want'>
                Things you might want
            </Link>    
        </li>
        <li><a href="about.asp">ho</a></li>
    </ul>);
}

export default Header;