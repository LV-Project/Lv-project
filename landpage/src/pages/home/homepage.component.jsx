import React from "react";
import TextContainer from "../../components/textcontainer/textcontainer.component";
import './homepage.styles.css'
import ReactForm from '../../components/custom-form/custom-react-form.component.jsx';

function Home(props) {
    return (<div>
        <TextContainer lightMode={props.lightMode}/>
        <ReactForm lightMode={props.lightMode}/>
        </div>
    );
}

export default Home; 