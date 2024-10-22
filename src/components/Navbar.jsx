import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const ModiNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow">
      <Container>
        {/* Logo a la izquierda */}
        <Navbar.Brand href="/">
          <img
            src="../images/log.png"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Asegúrate de que los enlaces estén a la derecha usando justify-content-end */}
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
            <LinkContainer to="/login">
              <Nav.Link><i className="bi bi-person-fill"></i></Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ModiNavbar;
