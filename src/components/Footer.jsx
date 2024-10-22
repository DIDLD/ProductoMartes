import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            <h3>Trabajo hecho por los siguientes programadores</h3>
            <p>Kevin Gutierrez Zapata</p>
            <p>Santiago Henao Cuervo</p>
            <p>Juan David Zapata Usuga</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
