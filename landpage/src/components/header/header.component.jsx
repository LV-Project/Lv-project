import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import './header.styles.css';

function Header(props) {

    const { pathname } = useLocation();


    function handleClick() {
        const bodyBackground = document.body;

        if (!props.lightMode) {
            bodyBackground.style.backgroundColor = 'white';
            bodyBackground.style.color = 'black';
            console.log(props.lightMode);
            props.setLightMode(true);
        } else {
            bodyBackground.style.backgroundColor = '#171717';
            bodyBackground.style.color = 'white';
            props.setLightMode(false);
            console.log(props.lightMode);
        }

    }

    return (<ul className='header'>
        <li className={`logo ${pathname === '/' ? 'black-background' : null}`}>
            <Link to='/'>
                <i class="fas fa-terminal"></i> Leonardo Villalba
            </Link>
        </li>
        <li className={`${pathname === '/things-you-might-want' ? 'black-background' : ' '}`}>
            <Link to='/things-you-might-want'>
                Things you might want
            </Link>
        </li>
        <li style={{color:'white'}}>            
                <FormControlLabel 
                    control={
                        <Switch 
                            defaultChecked 
                            onClick={handleClick}
                            color='default'
                        />
                        } 
                        label={`${!props.lightMode? 'Light Mode' : 'Dark Mode'}`}
                />
        </li>
    </ul>);
}

export default Header;