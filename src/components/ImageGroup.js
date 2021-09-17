import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCard from './ImageCard';

export default function ImageGroup(props) {

  return (
    <>
      <Row style={{
        margin: '5rem',
        }}>
        {props.images.map(image => {
          return (
            <Col>
              <ImageCard image={image} key={image.id} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}