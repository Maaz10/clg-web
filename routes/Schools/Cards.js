import React from 'react';
import {
  Image,
  Button,
  Row,
  Col,
  Container,
  Media,
  Card
} from 'react-bootstrap';
import image1 from './img1.jpeg';
import './Schools.css';
import Schools from './Schools';

function Cards(props) {
  return (<Card className='cards'>
    <Card.Body className="Image">
      <img src={props.image} alt="Cinque Terre" width={props.width} height={props.height}></img>
      <Card.Title></Card.Title>
      <Card.Text>
        <div className="line">
          <h2>{props.name}</h2>
        </div>
        {props.content}
        <br/>
        <br/>
      <Button className="button">Read more</Button>
      </Card.Text>
    </Card.Body>
  </Card>)
}

export default Cards;
