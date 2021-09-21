import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import ImagesContainer from './components/ImagesContainer';
import ImagesContainerOther from './components/ImagesContainerOther';

function App() {

  useEffect(() => {
    document.title = 'Mars Rover Today: Shopify Frontend Challenge'
  }, [])

  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <NavBar />
            <ImagesContainer />
          </div>
        </Route>
        <Route path="/yesterday">
          <div className="App">
            <NavBar />
            <ImagesContainerOther />
          </div>
        </Route>
      </Switch>
    </Router>
  ); 
}

export default App;
