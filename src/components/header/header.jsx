import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from "react-bootstrap";

import ExModal from "../signup/signin";

function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Navbar bg="primary" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About US</Nav.Link>
          <Nav.Link href="#link">SignIn</Nav.Link>
          <ButtonToolbar>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Contact Us
            </Button>

            <ExModal show={modalShow} onHide={() => setModalShow(false)} />
          </ButtonToolbar>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/signup">
            SignUp
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            LogIn
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
