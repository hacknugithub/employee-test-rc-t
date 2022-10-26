import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

type Props = {};

export default function Header({}: Props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Employees Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/#">Home</Nav.Link>
            <Nav.Link href="/#/login">Login</Nav.Link>
            <Nav.Link href="/#/employees">Employees</Nav.Link>
            <Nav.Link href="/#/upload">Upload</Nav.Link>
            <Nav.Link href="/#/upload/images">Images</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
