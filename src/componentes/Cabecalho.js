import React, { useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./Cabecalho.css";
import ModalNovoParceiro from "./ModalNovoParceiro";
import imgLogo from "../imagens/logo-cords.png";

export default function Cabecalho(props, { history }) {
  const [exibirModal, setexibirModal] = useState(false);

  const clicouFechar = () => setexibirModal(false);
  const clicouExibir = () => setexibirModal(true);

  function clicouHome() {}

  return (
    <Container>
      <Row className="linha-cabecalho">
        <Col
          lg={1}
          md={2}
          sm={2}
          xs={3}
          className="imagemCabecalho"
          action
          onClick={e => clicouHome()}
        >
          <img src={imgLogo} alt="ícone" />
        </Col>
        <Col lg={8} md={6} sm={6} xs={5} className="textoCabecalho">
          <p>{props.titulo}</p>
        </Col>
        <Col lg={3} md={4} sm={4} xs={4} className="botaoCabecalho">
          <Col>
            <Button variant="primary" action onClick={e => clicouExibir()}>
              Novo Parceiro
            </Button>
          </Col>
        </Col>
      </Row>
      <ModalNovoParceiro
        exibirModal={exibirModal}
        clicouFechar={clicouFechar}
      />
    </Container>
  );
}
