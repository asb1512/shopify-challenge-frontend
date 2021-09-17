import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ImageGroup from './ImageGroup';

export default function ImagesContainer(props) {

  // const arrayLength = props.images.length
  // const remainder = arrayLength % 5
  // const numOfFullIterations = Math.trunc(arrayLength / 5)

  const firstPiece = props.images?.slice(0, 5)
  const secondPiece = props.images?.slice(5, 10)
  const thridPiece = props.images?.slice(10, 15)

  const renderGroups = () => {
    return (
      <>
        <ImageGroup images={firstPiece} />
        <ImageGroup images={secondPiece} />
        <ImageGroup images={thridPiece} />
      </>
    )
  }

  return (
    <Container fluid>
      {props.images ? renderGroups() : null}
    </Container>
  )
}