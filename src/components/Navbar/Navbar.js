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
            <Nav.Link href=""><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#link"><Link to="/about">About</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </div>
    </Navbar>
    )
}

export default NavbarMain
