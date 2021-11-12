import React, { useEffect } from 'react';
import './react-carousel.styles.css';

function ReactCarousel(props) {


    function infinit() {
        const root = document.documentElement;
        const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
        const marqueeContent = document.getElementsByClassName('marquee-content')[0];


        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (let i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }
    useEffect(() => infinit());



    return (

        <div className='carousel-box'>
            <h1 className={`carousel-title ${props.lightMode?'light':null}`}> Automatic Logo Carousel</h1>
            <div className="marquee">
                <ul className="marquee-content">
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fab fa-codepen"></i></li>
                    <li><i class="fab fa-free-code-camp"></i></li>
                    <li><i class="fab fa-dev"></i></li>
                    <li><i class="fab fa-react"></i></li>
                    <li><i class="fab fa-vuejs"></i></li>
                    <li><i class="fab fa-angular"></i></li>
                    <li><i class="fab fa-node"></i></li>
                    <li><i class="fab fa-wordpress"></i></li>
                    <li><i class="fab fa-aws"></i></li>
                    <li><i class="fab fa-docker"></i></li>
                    <li><i class="fab fa-android"></i></li>
                </ul>
            </div>
        </div>
    );
}


export default ReactCarousel;