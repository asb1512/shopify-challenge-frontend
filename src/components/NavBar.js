import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function NavBar() {

  const [showDatePicker, setShowDatePicker] = useState(false)

  const renderDatePicker = () => {
    return (
      <Nav.Link>
        <DatePicker />
      </Nav.Link>
    )
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/" variant="danger">
          <Navbar.Brand href="#">Mars Rover Images</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link href="#">Today</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/yesterday">
              <Nav.Link href="#">Yesterday</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={() => setShowDatePicker(true)}
            >
              Pick a date
            </Nav.Link>
            {showDatePicker ? renderDatePicker() : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}