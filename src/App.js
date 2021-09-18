import React, { useState, useEffect } from 'react';
import { getCurrentDate } from './utils/currentDate';
import './App.css';
import NavBar from './components/NavBar';
import ImagesContainer from './components/ImagesContainer';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function App() {
  
  const [isLoading, setLoading] = useState(true)
  const [images, setImages] = useState(null)

  useEffect(() => {
    document.title = 'Mars Rover Today: Shopify Frontend Challenge'

    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getCurrentDate()}&api_key=TxaYe4m8QQn29wWfry8ck714cekGTjQ3SAF78rQD`)
      .then(resp => resp.json())
      .then(respJson => {
        console.log(respJson)
        setImages(respJson.photos)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="App">
          <div className="spinner fullscreen">
            <Spinner animation="grow" className="m-10-100" />
            <Spinner animation="grow" className="m-10-100" />
            <Spinner animation="grow" className="m-10-100" />
          </div>
        </div>
      )
    } else if (images.length === 0) {
      return (
        <div className="App">
          <div className="too-early">
            <div className="sad-face">:-(</div>
            <div className="">There aren't any pictures yet today...</div>
            <Button variant="outline-danger" className="button">
              View yesterday's pics
            </Button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="App fullscreen">
          <NavBar />
          <ImagesContainer images={images} isLoading={isLoading} />
        </div>
      )
    }
  }

  return (
    <>
      {renderContent()}
    </>
  ); 
}

export default App;
