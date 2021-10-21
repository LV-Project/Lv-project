import './App.css';
import React, { useState } from 'react';
import Jumbotron from './components/jumbotron/jumbotron.component';
import Header from './components/header/header.component';
import TextContainer from './components/textcontainer/textcontainer.component';
import Form from './components/custom-form/custom-form.component';




function App() {

  const [selectedItem, setSelectedItem] = useState(false);

  return (
    <div className="App">
      <Header />
      <Form />
      
    </div>
  );
}

export default App;
