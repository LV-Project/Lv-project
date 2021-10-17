import React from "react";
import './jumbotron.styles.scss';
import Banner from "../banner/banner.component.jsx";
import Carousel from '../carousel/carousel.component.jsx';

const Jumbotron = (props) => (
    <div className='box'>

        {props.inverted && <Banner title={props.title} subtitle={props.subtitle}/>}

        <Carousel  correction={props.inverted}/>

        {!props.inverted && <Banner title={props.title} subtitle={props.subtitle}/>}
    </div>
);

export default Jumbotron;