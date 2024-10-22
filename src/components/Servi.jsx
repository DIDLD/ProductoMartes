import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Servi = () => {
  return (
    <Container className="mt-5">
      {/* Título principal */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-gold">Nuestros Servicios</h1>
          <p className="lead text-muted">
            Lo que ofrecemos para mejorar tus finanzas
          </p>
        </Col>
      </Row>

      {/* Tarjetas de Servicios */}
      <Row className="g-4">
        <Col md={4}>
          <Card className="shadow-lg text-center text-white" style={{ backgroundColor: "#222" }}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="text-gold">Gestión de Gastos</Card.Title>
              <Card.Text>
                Controla tus gastos diarios y mantén un registro detallado de
                todas tus transacciones.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-lg text-center text-white" style={{ backgroundColor: "#222" }}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="text-gold">Planificación Financiera</Card.Title>
              <Card.Text>
                Planifica tus metas financieras a largo plazo y ajusta tu
                presupuesto de manera eficiente.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-lg text-center text-white" style={{ backgroundColor: "#222" }}>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/150"
              className="p-3"
            />
            <Card.Body>
              <Card.Title className="text-gold">Reportes Personalizados</Card.Title>
              <Card.Text>
                Obtén reportes detallados para analizar tus hábitos de gasto y
                optimizar tu ahorro.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Servi;
