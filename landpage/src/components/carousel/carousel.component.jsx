import React from 'react';
import './carousel.styles.css'

const Carousel = ({correction}) => (

    <div className={
            `${correction ? ' ' : 'correction'} pic-ctn` }

    >
        <img src="https://www.spiria.com/site/assets/files/2502/bandeau-react_0.1200x630.jpg" alt="" className="pic" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" className="pic" />
        <img src="https://www.tutorialmonsters.com/wp-content/uploads/2012/05/css.jpg" alt="" className="pic" />
        <img src="https://firebase.google.com/images/brand-guidelines/logo-logomark.png?hl=es" alt="" className="pic" />
        <img src="https://img-0.journaldunet.com/zGMW6_rjElWOqJtc8H2HYbYOYbA=/1500x/smart/d14dfaf85798491f8a14d8a20be4c357/ccmcms-jdn/11458235.jpg" alt="" className="pic" />
    </div>

);

export default Carousel;