import React, { useState, useEffect } from 'react';
import { getCurrentDate } from './utils/currentDate';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  
  const [currentDate] = useState(Date())
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    document.title = 'Mars Rover Today: Shopify Frontend Challenge'

    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2021-9-16&api_key=DEMO_KEY')
    console.log("today's date is", currentDate)
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
