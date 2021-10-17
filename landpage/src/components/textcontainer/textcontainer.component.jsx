import React from 'react';
import './textcontainer.styles.css';

const TextContainer = () => (
    <div className='text-box'>
        <div className='text-container'>
            <p>In this age, Webpages are one of the most required tools to provide communication, show visibility and develop inginious apps to serve in different kind of areas. Make your ideas stand out among others, create and see how fast your business can grows by using the right color, desing or component.
            </p>
        </div>
        <div className='text-container colored'>
            <p>I'm a freelancer ready to meet and surprise your expectations. Constantly thinking about what is the shortest and efficient way to give results. I work with <span className='bold'>React.js, Node.js and Firebase</span> as my main tools having at the end pages like this one, waiting ready to accomplish your goal.</p>
        </div>
    </div>
);

export default TextContainer;