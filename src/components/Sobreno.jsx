import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Ola from "../images/ola.jpg";
import Footer from "./Footer";

const Sobreno = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 text-gold">Sobre Nosotros</h1>
          <p className="lead text-muted">
            Conoce más sobre nuestra misión y valores
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        
        <Col md={6}>
          <Card
            className="shadow-lg text-white"

            style={{ backgroundColor: "#222" }}
          >
            <Card.Body>
              <Card.Title className="text-gold">Nuestra Misión</Card.Title>
              <Card.Text>

                Ayudar a las personas a gestionar mejor sus finanzas a través de
                herramientas simples y efectivas que mejoren su calidad de vida.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card
            className="shadow-lg text-white"
            style={{ backgroundColor: "#222" }}
          >
            <Card.Body>
              <Card.Title className="text-gold">Nuestra Visión</Card.Title>
              <Card.Text>
                Ser la plataforma líder en gestión de finanzas personales,
                ofreciendo soluciones innovadoras que transformen la vida de
                nuestros usuarios.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5 align-items-center">
        <Col md={6}>
          <img src={Ola} alt="Historia" className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <Card
            className="shadow-lg text-white"
            style={{ backgroundColor: "#222" }}
          >
            <Card.Body>
              <Card.Title className="text-gold">Nuestra Historia</Card.Title>
              <Card.Text>
                Desde nuestros inicios en el año XXXX, hemos trabajado
                incansablemente para mejorar la vida financiera de nuestros
                usuarios. A lo largo de los años, hemos ganado la confianza de
                miles de personas alrededor del mundo.
              </Card.Text>

            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Footer />
    </Container>
  );
};

export default Sobreno;
