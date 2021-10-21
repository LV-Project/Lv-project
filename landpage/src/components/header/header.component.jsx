import React from 'react';
import './header.styles.css';

function Header () {

    return(<ul className='header'>
        <li className='logo'><a href="default.asp"><i class="fas fa-terminal"></i> Leonardo Villalba  </a></li>
        <li><a href="contact.asp">Thinks you might want</a></li>
        <li><a href="about.asp">Open to business</a></li>
    </ul>);
}

export default Header;