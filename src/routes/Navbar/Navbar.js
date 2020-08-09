import React from 'react';
import './Navbar.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import nav_logo from './nav-logo.jpg';
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.css';

function Navbari(){
  return(
    <Navbar  className = "navbarcss"  fixed="top"  expand="lg" variant="dark">
<Navbar.Brand href="/"><Image src={nav_logo} height = "50px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/">About</Nav.Link>
                  <Nav.Link href="/schools">Schools</Nav.Link>
                  <Nav.Link href="/">Learning Resource</Nav.Link>
                  <Nav.Link href="/">Downloads</Nav.Link>
                </Nav>
                <Form inline>

                      <Button variant="outline-warning">Login</Button>
                 </Form>
              </Navbar.Collapse>
            </Navbar>
  )
}

export default Navbari;
