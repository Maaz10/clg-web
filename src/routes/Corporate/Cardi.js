import React from 'react';
import { Image, Button, Row, Col, Container, Media, Card } from 'react-bootstrap';
import image1 from './eng.jpeg';
import './Corporate.css';

function Cardi(props) {
  return (
    <Card style={{ width: '18rem' }} className="cardx">
      <Card.Img variant="top" src={image1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
</Card.Text>
        <Button className="button" variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Cardi;
