import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Cabecalho.css";
import ModalNovoParceiro from "./ModalNovoParceiro";

export default function Cabecalho(props) {
  const [exibirModal, setexibirModal] = useState(false);

  const clicouFechar = () => setexibirModal(false);
  const clicouExibir = () => setexibirModal(true);

  return (
    <Container>
      <Row className="linha-cabecalho">
        <Col sm={2} className="imagemCabecalho">
          <img src="" alt="ícone" />
        </Col>
        <Col sm={6} className="textoCabecalho">
          <p>{props.titulo}</p>
        </Col>
        <Col sm={4} className="botaoCabecalho">
          <Button variant="primary" action onClick={e => clicouExibir()}>
            Novo Parceiro
          </Button>
        </Col>
      </Row>

      <ModalNovoParceiro
        exibirModal={exibirModal}
        clicouFechar={clicouFechar}
      />
    </Container>
  );
}
