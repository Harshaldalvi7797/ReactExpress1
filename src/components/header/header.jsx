import React,{Component} from "react";
import {Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

class Header extends Component{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return(
            <Navbar bg="light" expand="lg" bg="primary">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About US</Nav.Link>

    </Nav>
    <Nav >
    <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
      <Nav.Link as={Link} to="/login">LogIn</Nav.Link>

    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        );
    }
    
    
}

export default Header;