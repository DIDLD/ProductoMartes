import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Logo from "../images/log.png";
const ModiNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        {}
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Inicio</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sobreno">
              <Nav.Link>Sobre Nosotros</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/servi">
              <Nav.Link>Servicios</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacto">
              <Nav.Link>Contacto</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/inicioS">
              <Nav.Link to >
              <i className="bi bi-person-fill"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModiNavbar;
