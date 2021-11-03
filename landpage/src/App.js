import './App.css';
import Header from './components/header/header.component';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer } from './components/footer/footer.component';

const Home = lazy(() => import('./pages/home/homepage.component.jsx'));
const Collection = lazy(() => import('./pages/collection/collection.component.jsx'));


function App() {

  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/things-you-might-want' component={Collection}></Route>
          </Switch>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;