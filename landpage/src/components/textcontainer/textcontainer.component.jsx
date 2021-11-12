import React from 'react';
import './textcontainer.styles.css';

const TextContainer = (props) => (

    <div className='text-box'>
        <div className={`text-container ${props.lightMode?'light':null}`}>
            <h1 className={`${props.lightMode?'light':null}`}>Front-end developer{props.lightMode}</h1>
            <p>In this era, web pages are one of the most required communication tools, showing visibility and developing ingenious applications to serve different types of areas. Make your ideas stand out from the crowd and see how quickly your business can grow using the right color, design, and functionality.
            </p>
        </div>
    </div>
);

export default TextContainer;