import React, { useState } from 'react';
import './card.styles.css';
import LinearProgress from '@mui/material/LinearProgress';

function Card(props) {

    const [progress, setProgress] = useState(0);

    function handleClick() {
        if(progress<100){
            setProgress(progress+10);
        }else{
            setProgress(0);
        }
    }

    return <div className='card-container'>
        <h1 className={`card-title ${props.lightMode?'light':null}`}>Cards</h1>
        <div className="courses-container">
            <div className="course">
                <div class="course-preview">
                    <h6>Course</h6>
                    <h2>Course's Name</h2>
                    <a>View all chapters <i class="fas fa-chevron-right"></i></a>
                </div>
                <div className="course-info">
                    <div className="progress-container">
                        <LinearProgress
                            variant='determinate'
                            value={progress}
                        />
                        <span className="progress-text">
                            {progress/10}/10 Challenges
                        </span>
                    </div>
                    <h6 className='chapter'>Chapter 4</h6>
                    <h2>Callbacks & Closures</h2>
                    <button className="btn" onClick={handleClick}>Click me!</button>
                </div>
            </div>
        </div>



    </div>
}

export default Card;