import React from 'react';
import './custom-button.styles.css';



function CustomButton(props) {

    

    return (<div className='business-section'>
        <button
            id='button'
            className="glow-on-hover"
            type="button"
            onClick={() => (props.vanish())}
        >
            {
                props.children
            }
        </button>
    </div>);
}

export default CustomButton;