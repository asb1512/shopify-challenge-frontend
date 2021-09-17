import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ImageGroup from './ImageGroup';

export default function ImagesContainer(props) {

  const renderGroups = () => {
    
  }

  return (
    <Container fluid>
      {props.images ? renderGroups() : null}
    </Container>
  )
}