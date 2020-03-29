import React, { useEffect, useState } from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaCategorias.css";

export default function ListaCategorias({ match, history }) {
  const [categorias, setCategorias] = useState([]);
  const idcidade = match.params.idcidade;
  const baseUrlImagem = "https://arquivos-app-do-bem-s3.s3.amazonaws.com/";

  useEffect(() => {
    async function carregarCategorias() {
      // const response = await api.get("/categorias");
      // setCategorias(response.data);
      setCategorias([
        {
          id: 1,
          nome: "Hortifruti",
          urlImagem:
            "APP/beautiful-women-works-in-a-garden-near-the-house-VWCH78M-ok.jpg"
        },
        {
          id: 2,
          nome: "Pães e Bolos",
          urlImagem: "APP/various-sliced-bread-PH7UZWM-ok.jpg"
        },
        {
          id: 3,
          nome: "Serviços",
          urlImagem: "APP/cleaning-service-during-work-PPTAZG5-ok.jpg"
        },
        {
          id: 4,
          nome: "Outros Produtos",
          urlImagem: "APP/honey-product-P864FVE-ok.jpg"
        }
      ]);
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
      <Cabecalho titulo="Maringá" />
      <CardDeck>
        {categorias.map(categoria => (
          <Card
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
