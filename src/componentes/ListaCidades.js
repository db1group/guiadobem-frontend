import React, { useEffect, useState } from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import imgMaringa from "../imagens/maringa.jpg";
import imgCampoGrande from "../imagens/campogrande.jpg";
import imgMosaico from "../imagens/mosaico.jpg";
import imgPresidentePrudente from "../imagens/presidenteprudente.jpg";
import imgPortoAlegre from "../imagens/portoalegre.jpg";
import "./ListaCidades.css";

export default function ListaCidades({ history }) {
  const [cidades, setCidades] = useState([]);

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

  function definirImagem(idCidade) {
    if (idCidade === 1) {
      return imgMaringa;
    }
    if (idCidade === 2) {
      return imgPresidentePrudente;
    }
    if (idCidade === 3) {
      return imgCampoGrande;
    }
    if (idCidade === 4) {
      return imgMosaico;
    }
    if (idCidade === 7) {
      return imgPortoAlegre;
    }
  }

  return (
    <Container>
      <Cabecalho />
      <CardDeck>
        {cidades.map((cidade) => (
          <Card
            key={cidade.id}
            //action
            onClick={(e) => cidadeSelecionada(cidade.id)}
          >
            <Card.Img variant="top" src={definirImagem(cidade.id)} />
            <Card.Body>
              <Card.Title>{cidade.nome}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
}
