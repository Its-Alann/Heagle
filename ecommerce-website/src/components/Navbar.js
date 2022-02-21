import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'
import{Link} from "react-router-dom"
import "./Navbar.css"

export default class NavbarMenu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="" expand="lg">
        <Container fluid>
            <Navbar.Brand href='https://heagle.herokuapp.com/'>
            <img
                alt="Logo"
                src={require('./../images/heaglw-logo-transparent-v2.png')}
                width="100"
                height="100"
                className="heagle-logo"
            />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                
                <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/clothes">Clothes</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/food">Food</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/marketplace">Marketplace</NavDropdown.Item>
                </NavDropdown>
                
                <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                <Nav.Link as={Link} to="/user">User</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>

            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>

            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    )
  }
}