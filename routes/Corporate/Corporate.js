import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Image, Button, Row, Col, Container, Media, Card } from 'react-bootstrap';
import './Corporate.css';
import Cardi from './Cardi.js';

function Corporate() {
  return (
    <div>
      <div className="rectangle2">
        <div className="header1">Corporate</div>
      </div>
      <div className="background1">
        <div className="trials">
         <Cardi/>
         <Cardi/>
         <Cardi/>
        </div>
      </div>
      <div className="background2">
        <div className="trials">
         <Cardi/>
         <Cardi/>
         <Cardi/>
        </div>
      </div>
    </div>
  );
}

export default Corporate;
