import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ImageCard(props) {

  console.log("Image card data", props.image)

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image.img_src} />
      <Card.Body>
        <Card.Title>{props.image.rover.name} Rover</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Like</Button>
      </Card.Body>
    </Card>
  )
}