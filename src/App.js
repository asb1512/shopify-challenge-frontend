import React, { useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  useEffect(() => {
    document.title = 'Mars Rover Today: Shopify Frontend Challenge'
  }, [])

  return (
    <div className="App">
      <NavBar />
      <div className="main">

      </div>
    </div>
  );
}

export default App;
