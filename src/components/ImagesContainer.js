import Container from 'react-bootstrap/Container';
import ImageGroup from './ImageGroup';

export default function ImagesContainer(props) {

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