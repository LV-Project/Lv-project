import './App.css';
import React, { useState } from 'react';
import AnimatedBackground from './components/animatedbackground/animatedbackground.component';
import Jumbotron from './components/jumbotron/jumbotron.component';
import NavBar from './components/header/header.component';
import TextContainer from './components/textcontainer/textcontainer.component';



function App() {

  const [selectedItem, setSelectedItem] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Jumbotron 
      inverted={true}
      title='Leonardo Villalba'
      subtitle='Front-end developer'
      />
      <TextContainer />
      
      
    </div>
  );
}

export default App;
