import './App.css';
import React, { useState } from 'react';
import Header from './components/header/header.component';
import TextContainer from './components/textcontainer/textcontainer.component';
import Form from './components/custom-form/custom-form.component';




function App() {

  return (
    <div className="App">
      <Header />
      <TextContainer />
      <Form />
      
    </div>
  );
}

export default App;