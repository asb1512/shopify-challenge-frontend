import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function ImageCard(props) {

  console.log("Image card data", props.image)

  const [likes, incrementLikes] = useState(0)
  const [likeText, setLikeText] = useState('likes')

  const handleLike = () => {
    if (likes + 1 === 1) {
      incrementLikes(likes + 1)
      setLikeText('like')
    } else {
      incrementLikes(likes + 1)
      setLikeText('likes')
    }
  }

  const handleUnlike = () => {
    if (likes > 0) {
      if (likes - 1 === 1) {
        incrementLikes(likes - 1)
        setLikeText('like')
      } else {
        incrementLikes(likes - 1)
        setLikeText('likes')
      }
    }
  }

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
          <Button variant="outline-danger" style={{marginBottom: '1rem'}} disabled>
            {likes} {likeText}
          </Button>{' '}
          <ButtonGroup>
            <Button variant="danger" size="lg" onClick={() => handleLike()}>
              Like
            </Button>
            <Button variant="outline-danger" size="lg" onClick={() => handleUnlike()}>
              Unlike
            </Button>
          </ButtonGroup>
        </div>
      </Card.Body>
    </Card>
  )
}