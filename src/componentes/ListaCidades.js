import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import "./ListaCidades.css";

export default function ListaCidades({ history }) {
  function cidadeSelecionada() {
    history.push(`/listacategorias/$123`);
  }

  return (
    <Container>
      <Cabecalho titulo="Guia do Bem" />

      {["Maringá", "Campo Grande", "Presidente Prudente", "Outras"].map(
        cidade => (
          <Row className="linha-cidades">
            <Col>
              <Card
                className="bg-dark text-white"
                action
                onClick={e => cidadeSelecionada()}
              >
                <Card.Img src="" alt="foto da cidade" />
                <Card.ImgOverlay>
                  <Card.Footer>{cidade}</Card.Footer>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        )
      )}
    </Container>
  );
}
