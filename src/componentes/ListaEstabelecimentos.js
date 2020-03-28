import React from "react";
import { Container, Media, Row, Col } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import "./ListaEstabelecimento.css";

export default function ListaEstabelecimentos() {
  function estabelecimentoSelecionado() {}

  return (
    <Container>
      <Cabecalho titulo="Guia do Bem" />

      {[
        {
          nome: "Cia Sasaki",
          tipo: "Legumes,  verduras",
          telefone: "44 3033 2345",
          whatsapp: "44 99989 9988",
          responsavel: "Edson"
        },
        {
          nome: "Banca da Elisa",
          tipo: "Legumes,  verduras",
          telefone: "44 3033 2345",
          whatsapp: "44 99989 9988",
          responsavel: "Edson"
        },
        {
          nome: "Horta Seleta",
          tipo: "Legumes,  verduras",
          telefone: "44 3033 2345",
          whatsapp: "44 99989 9988",
          responsavel: "Edson"
        },
        {
          nome: "Sacolão Tropical",
          tipo: "Legumes,  verduras",
          telefone: "44 3033 2345",
          whatsapp: "44 99989 9988",
          responsavel: "Edson"
        }
      ].map(estabelecimento => (
        <Row className="linha-estabelecimentos">
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src=""
                alt="imagem"
              />
              <Media.Body action onClick={e => estabelecimentoSelecionado()}>
                <h5>{estabelecimento.nome}</h5>
                <p>{estabelecimento.tipo}</p>
                <p>{estabelecimento.telefone}</p>
                <p>{estabelecimento.whatsapp}</p>
                <p>{estabelecimento.responsavel}</p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
