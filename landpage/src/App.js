import './App.css';
import React, { useState } from 'react';
import Header from './components/header/header.component';
import TextContainer from './components/textcontainer/textcontainer.component';
import Form from './components/custom-form/custom-form.component';
import ReactForm from './components/custom-form/custom-react-form.component';





function App() {

  return (
    <div className="App">
      <Header />
      <TextContainer />
      <ReactForm />
      
    </div>
  );
}

export default App;