import React from "react";
import './jumbotron.styles.scss';
import Banner from "../banner/banner.component.jsx";
import Carousel from '../carousel/carousel.component.jsx';

const Jumbotron = ({ inverted }) => (
    <div className='box'>

        {inverted && <Banner />}

        <Carousel  correction={inverted}/>

        {!inverted && <Banner />}
    </div>
);

export default Jumbotron;