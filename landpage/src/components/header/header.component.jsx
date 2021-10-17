import React from 'react';
import './header.styles.css';


const NavBar = () => (
    <ul>
        <li className='logo'><a href="default.asp">Who am I<i class="fas fa-question"></i></a></li>
        <li><a href="news.asp">Contact me</a></li>
        <li><a href="contact.asp">Thinks you might want</a></li>
        <li><a href="about.asp">Open to business</a></li>
    </ul>
);

export default NavBar;