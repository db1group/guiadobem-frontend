import React, { useEffect, useState } from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaCategorias.css";

export default function ListaCategorias({ match, history }) {
  const [categorias, setCategorias] = useState([]);
  const [cidade, setCidade] = useState([]);
  const idcidade = match.params.idcidade;
  const baseUrlImagem = "https://arquivos-app-do-bem-s3.s3.amazonaws.com/";

  useEffect(() => {
    async function carregarCategorias() {
      const resposeCategorias = await api.get("/categorias");
      setCategorias(resposeCategorias.data);

      const responseCidade = await api.get("/cidades/" + idcidade);
      setCidade(responseCidade.data);
    }
    carregarCategorias();
  }, []);

  function categoriaSelecionada(idcidade, idcategoria) {
    history.push(
      `/listacategorias/${idcidade}/estabelecimentos/${idcategoria}`
    );
  }

  return (
    <Container>
      <Cabecalho titulo={cidade.nome || "Guia do Bem"} />
      <CardDeck>
        {categorias.map(categoria => (
          <Card
            key={categoria.id}
            action
            onClick={e => categoriaSelecionada(idcidade, categoria.id)}
          >
            <Card.Img variant="top" src={baseUrlImagem + categoria.urlImagem} />
            <Card.Body>
              <Card.Title>{categoria.nome}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
}
