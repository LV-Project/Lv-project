import React from 'react';
import './banner.styles.scss';

const Banner = (props) => (
    <div className='container'>
        <h1 className="title">{props.title}</h1>
        <p className="subtitle"><code>{props.subtitle}</code></p>
    </div>
);

export default Banner;


