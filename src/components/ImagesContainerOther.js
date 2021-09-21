import React, { useState, useEffect } from 'react';
import { getYesterdaysDate } from '../utils/yesterdaysDate';
import Container from 'react-bootstrap/Container';
import ImageGroup from './ImageGroup';
import Spinner from 'react-bootstrap/Spinner';


export default function ImagesContainerOther() {

  const [isLoading, setLoading] = useState(true)
  const [images, setImages] = useState(null)

  useEffect(() => {
    fetchYesterday()
  }, [])

  const fetchYesterday = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getYesterdaysDate()}&api_key=TxaYe4m8QQn29wWfry8ck714cekGTjQ3SAF78rQD`)
      .then(resp => resp.json())
      .then(respJson => {
        console.log(respJson)
        setImages(respJson.photos)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  const firstPiece = images?.slice(0, 5)
  const secondPiece = images?.slice(5, 10)
  const thridPiece = images?.slice(10, 15)

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="spinner fullscreen">
          <Spinner animation="grow" className="m-10-100" />
          <Spinner animation="grow" className="m-10-100" />
          <Spinner animation="grow" className="m-10-100" />
        </div>
      )
    } else {
      return (
        <div className="fullscreen">
          <Container fluid>
            <ImageGroup images={firstPiece} isLoading={isLoading} />
            <ImageGroup images={secondPiece} isLoading={isLoading} />
            <ImageGroup images={thridPiece} isLoading={isLoading} />
          </Container>
        </div>
      )
    }
  }

  return (
    <>
      {images ? renderContent() : null}
    </>
  )
}