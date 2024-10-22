import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Importar Link
import "../css/cuerpo.css";
import logo from "../images/log.png";

const Cuerp = () => {
  return (
    <Container className="mt-5">
      {/* Sección de Bienvenida */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4">Bienvenido a Finanzas</h1>
          <br />
          <br />
          <p className="lead">
            La mejor solución para gestionar tus gastos personales de manera
            eficiente.
          </p>
        </Col>
      </Row>

      {/* Sección de Sobre Nosotros */}
      <Row className="my-5">
        <Col md={6}>
          <img
            src={logo}
            alt="Sobre Nosotros"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h2 className="mb-4">¿Quiénes somos?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quam doloremque do lorum a excepturi voluptatum, voluptate
            laudantium alias cumque repellendus. Omnis nam optio totam nostrum
            enim culpa! Ea, ipsa atque!
          </p>
        </Col>
      </Row>

      {/* Sección de Servicios */}
      <Row className="my-5 text-center">
        <Col>
          <h2 className="mb-4">Nuestros Servicios</h2>
        </Col>
      </Row>
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-sm card-dorado">
            <Card.Body>
              <Card.Title>Gestión de Gastos</Card.Title>
              <Card.Text>
                Controla tus gastos diarios y mantén un registro de todas tus
                transacciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm card-dorado">
            <Card.Body>
              <Card.Title>Planificación Financiera</Card.Title>
              <Card.Text>
                Planifica tus metas a largo plazo y ajusta tus presupuestos con
                precisión.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm card-dorado">
            <Card.Body>
              <Card.Title>Reportes Personalizados</Card.Title>
              <Card.Text>
                Obtén reportes detallados para analizar tus hábitos de gasto y
                ahorrar más.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Sección de Testimonios */}
      <Row className="my-5">
        <Col className="text-center">
          <h2 className="mb-4">Lo que dicen nuestros usuarios</h2>
          <blockquote className="blockquote">
            <p className="mb-0">
              “Finanzas ha transformado completamente mi manera de gestionar mis
              finanzas. ¡Lo recomiendo al 100%!”
            </p>
            <footer className="blockquote-footer mt-3">
              <cite title="Source Title">Juan Pérez</cite>
            </footer>
          </blockquote>
        </Col>
      </Row>

      {/* Llamado a la acción */}
      <Row className="text-center my-5">
        <Col>
          <h2 className="mb-4">
            ¿Listo para tomar el control de tus finanzas?
          </h2>
          <Button className="btn-dorado" size="lg">
            <Link
              to="/registro"
              style={{ color: "white", textDecoration: "none" }}
            >
              Únete ahora
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cuerp;
