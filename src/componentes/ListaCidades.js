import React, { useEffect, useState } from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaCidades.css";

export default function ListaCidades({ history }) {
  const [cidades, setCidades] = useState([]);
  const baseUrlImagem = "https://arquivos-app-do-bem-s3.s3.amazonaws.com/";

  useEffect(() => {
    async function carregarCidades() {
      const response = await api.get("/cidades");
      setCidades(response.data);
    }
    carregarCidades();
  }, []);

  function cidadeSelecionada(idcidade) {
    history.push(`/listacategorias/${idcidade}`);
  }

  return (
    <Container>
      <Cabecalho titulo="Guia do Bem" />
      <CardDeck>
        {cidades.map(cidade => (
          <Card
            key={cidade.id}
            action
            onClick={e => cidadeSelecionada(cidade.id)}
          >
            <Card.Img variant="top" src={baseUrlImagem + cidade.urlImagem} />
            <Card.Body>
              <Card.Title>{cidade.nome}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
}
