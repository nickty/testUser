import React from 'react'
import { Button, Form, FormControl, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom'
const NavbarMain = () => {
    return (
    <Navbar bg="light" expand="lg">
        <div className="container">
        <Navbar.Brand href="#home">Flipcute</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/contact">Contact</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Link to="/register">Register</Link></Nav.Link>
            <Nav.Link>Login</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
        </div>
    </Navbar>
    )
}

export default NavbarMain
