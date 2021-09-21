import Container from 'react-bootstrap/Container';
import ImageGroup from './ImageGroup';

export default function ImagesContainer(props) {

  const firstPiece = props.images?.slice(0, 5)
  const secondPiece = props.images?.slice(5, 10)
  const thridPiece = props.images?.slice(10, 15)

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