import "./App.css";
import Header from "./components/header/header.component";
import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer } from "./components/footer/footer.component";
import Home from "./pages/home/homepage.component.jsx";
import Collection from "./pages/collection/collection.component.jsx";

function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <div className="content">
          <Header setLightMode={setLightMode} lightMode={lightMode} />
          <Switch>
          <div className='main-content'>
            <Route exact path="/Lv-project">
              <Home lightMode={lightMode} />
            </Route>
            <Route path="/things-you-might-want">
              <Collection lightMode={lightMode} />
            </Route>
          </div>
          </Switch>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
