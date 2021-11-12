import './App.css';
import Header from './components/header/header.component';
import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer/footer.component';

const Home = lazy(() => import('./pages/home/homepage.component.jsx'));
const Collection = lazy(() => import('./pages/collection/collection.component.jsx'));


function App() {

  const [lightMode, setLightMode]=useState(false);

  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <div className="App">
          <Header setLightMode={setLightMode} lightMode={lightMode}/>
          <Switch>
            <Route exact path='/' ><Home lightMode={lightMode}/></Route>
            <Route exact path='/things-you-might-want'><Collection lightMode={lightMode}/></Route>
          </Switch>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;