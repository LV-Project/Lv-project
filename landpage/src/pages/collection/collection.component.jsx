import Card from '../../components/card/card.component.jsx';
import React from "react";
import ReactCarousel from "../../components/react-carousel/react-carousel.component";
import SwipeableTextMobileStepper from "../../components/slide/slide.component";
import './collection.styles.css';
import { Grid } from '../../components/grid/grid.component.jsx';

function Collection(props) {
 


    return (
        <div>
            <ReactCarousel lightMode={props.lightMode}/>
            <SwipeableTextMobileStepper lightMode={props.lightMode}/>
            <Card lightMode={props.lightMode}/>
            <Grid lightMode={props.lightMode}/>
        </div>
    );
}

export default Collection;