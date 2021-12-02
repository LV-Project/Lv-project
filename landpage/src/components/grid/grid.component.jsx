import React from 'react';
import './grid.styles.css'


export const Grid = (props) => (
    <div className='grid-container'> 
    <h1 className={`${props.lightMode?'light':null}`}>CSS Grid</h1>
    <div id="page">
        <header>Header</header>
        <nav>Navigation</nav>
        <main>Main area</main>
        <footer>Footer</footer>
    </div></div>
); 
