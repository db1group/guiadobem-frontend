import React, { useEffect, useState } from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import Titulo from "./Titulo";
import imgConfeitaria from "../imagens/confeitaria.jpg";
import imgHortiFruti from "../imagens/hortifruti.jpg";
import imgOutros from "../imagens/outros.jpg";
import imgServicos from "../imagens/servicos.jpg";
import "./ListaCategorias.css";

export default function ListaCategorias({ match, history }) {
  const [categorias, setCategorias] = useState([]);
  const [cidade, setCidade] = useState({ nome: "" });
  const idcidade = match.params.idcidade;

  useEffect(() => {
    async function carregarCategorias() {
      const resposeCategorias = await api.get("/categorias");
      setCategorias(resposeCategorias.data);

      const responseCidade = await api.get("/cidades/" + idcidade);
      setCidade(responseCidade.data);
    }
    carregarCategorias();
  });

  function categoriaSelecionada(idcidade, idcategoria) {
    history.push(
      `/listacategorias/${idcidade}/estabelecimentos/${idcategoria}`
    );
  }

  function definirImagem(idCategoria) {
    if (idCategoria === 1) {
      return imgHortiFruti;
    }
    if (idCategoria === 2) {
      return imgConfeitaria;
    }
    if (idCategoria === 3) {
      return imgServicos;
    }
    if (idCategoria === 4) {
      return imgOutros;
    }
  }

  return (
    <Container>
      <Cabecalho />
      <Container>
        <Titulo botaoVoltarClique={history.goBack}>{cidade.nome}</Titulo>  
      </Container>
      <CardDeck>
        {categorias.map((categoria) => (
          <Card
            key={categoria.id}
            //action
            onClick={(e) => categoriaSelecionada(idcidade, categoria.id)}
          >
            <Card.Img variant="top" src={definirImagem(categoria.id)} />
            <Card.Body>
              <Card.Title>{categoria.nome}</Card.Title>
              <Card.Text>{categoria.descricao}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  );
}
