import React, { useState, useEffect } from 'react';
import { getCurrentDate } from '../utils/currentDate';
import Container from 'react-bootstrap/Container';
import ImageGroup from './ImageGroup';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

export default function ImagesContainer() {

  const [isLoading, setLoading] = useState(true)
  const [images, setImages] = useState(null)

  useEffect(() => {
    fetchToday()
  }, [])

  const fetchToday = () => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getCurrentDate()}&api_key=TxaYe4m8QQn29wWfry8ck714cekGTjQ3SAF78rQD`)
      .then(resp => resp.json())
      .then(respJson => {
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
    } else if (images.length === 0) {
      return (
        <div className="too-early">
          <div className="sad-face">:-(</div>
          <div className="">There aren't any pictures yet today...</div>
          <LinkContainer to="/yesterday">
            <Button variant="outline-danger" className="button">
              View yesterday's pics
            </Button>
          </LinkContainer>
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