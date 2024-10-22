import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/registro.css";

const Registro = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6} className="bg-dark p-4 rounded shadow">
          <h2 className="mb-4 text-center text-gold">Registro</h2>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label className="text-gold">Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                required
                className="bg-dark text-gold border-gold"
                style={{
                  color: "#FFD700",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mt-3">
              <Form.Label className="text-gold">Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                required
                className="bg-dark text-gold border-gold"
                style={{
                  color: "#FFD700",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              />
            </Form.Group>

            <Button
              variant="warning"
              type="submit"
              className="mt-4 w-100"
              style={{
                backgroundColor: "#FFD700",
                borderColor: "#FFD700",
                color: "black",
              }}
            >
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Registro;
