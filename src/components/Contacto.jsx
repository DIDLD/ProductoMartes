import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">Contacto</h1>
          <p className="lead">
            Ponte en contacto con nosotros para obtener más información sobre cómo podemos ayudarte.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={8} className="mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí" />
            </Form.Group>

            <Button variant="success" type="submit" className="btn-gold">
              Enviar Mensaje
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="text-center my-5">
        <Col>
          <Button variant="success" className="btn-gold">
            <a href="/" className="text-white">Volver a Inicio</a>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
