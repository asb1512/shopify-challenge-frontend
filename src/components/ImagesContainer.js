import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import ImageGroup from './ImageGroup';

export default function ImagesContainer(props) {

  const firstPiece = props.images?.slice(0, 5)
  const secondPiece = props.images?.slice(5, 10)
  const thridPiece = props.images?.slice(10, 15)

  const [firstGroup, setFirstGroup] = useState([null, null, null, null, null])
  const [secondGroup, setSecondGroup] = useState({0: null, 1: null, 2: null, 3: null, 4: null,})
  const [threeGroup, setThreeGroup] = useState({0: null, 1: null, 2: null, 3: null, 4: null,})

  const randomizeGroups = () => {
    let length = props.images.length - 1
    for (let i = 0; i < 5; i++) {
      const min = Math.ceil(0)
      const max = Math.floor(length)
      const float = (Math.random() * (max - min) + min)
      const int = Math.trunc(float)
      setFirstGroup(...firstGroup, firstGroup[i] = int,)
    }
    // for (let i = 0; i < 4; i++) {
    //   const min = Math.ceil(0)
    //   const max = Math.floor(length)
    //   const int = (Math.random() * (max - min) + min)
    //   setSecondGroup(secondGroup.push(int))
    // }
    // for (let i = 0; i < 4; i++) {
    //   const min = Math.ceil(0)
    //   const max = Math.floor(length)
    //   const float = (Math.random() * (max - min) + min)
    //   const int = Math.trunc(float)
    //   setThreeGroup(threeGroup.push(int))
    // }
  }
  randomizeGroups()
  console.log("first group", firstGroup)

  const renderGroups = () => {
    return (
      <>
        <ImageGroup images={firstPiece} isLoading={props.isLoading}/>
        <ImageGroup images={secondPiece} isLoading={props.isLoading}/>
        <ImageGroup images={thridPiece} isLoading={props.isLoading}/>
      </>
    )
  }

  return (
    <Container fluid>
      {props.images ? renderGroups() : null}
    </Container>
  )
}