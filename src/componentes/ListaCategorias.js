import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import "./ListaCategorias.css";

export default function ListaCategorias({ history }) {
  function categoriaSelecionada() {
    history.push(`/listacategorias/123/estabelecimentos/123`);
  }

  return (
    <div className="container">
      <Cabecalho titulo="Maringá" />
      {["Horti-fruti", "Confeitaria", "Serviços", "Outros produtos"].map(
        categoria => (
          <Row className="linha-categorias">
            <Col>
              <Card
                className="bg-dark text-white"
                action
                onClick={e => categoriaSelecionada()}
              >
                <Card.Img src="" alt="foto da categoria" />
                <Card.ImgOverlay>
                  <Card.Footer>{categoria}</Card.Footer>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        )
      )}
    </div>
  );
}
