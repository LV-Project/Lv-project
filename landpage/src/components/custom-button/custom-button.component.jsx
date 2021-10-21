import React from 'react';
import './custom-button.styles.css';



function CustomButton(props) {

    

    return (<div className='business-section button-position'>
        <button
            id='button'
            className="glow-on-hover"
            type={props.type}
            onClick={() => (props.vanish())}
        >
            {
                props.children
            }
        </button>
    </div>);
}

export default CustomButton;