import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ImageCard(props) {

  console.log("Image card data", props.image)

  return (
    <Card style={{ width: '90%', height: '100%' }}>
      <Card.Img variant="top" src={props.image.img_src} />
      <Card.Body>
        <Card.Title>{props.image.rover.name} Rover</Card.Title>
        <Card.Text>
          Rover Status: {props.image.rover.status}
        </Card.Text>
        <Card.Text>
          Camera Type: <br/> {props.image.camera.full_name}
        </Card.Text>
        <div className="d-grid">
        <Button variant="primary" size="lg">
          Like
        </Button>
        </div>
      </Card.Body>
    </Card>
  )
}