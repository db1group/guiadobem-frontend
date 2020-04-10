import React, { useEffect, useState } from "react";
import { Container, CardColumns, Card, Row } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaEstabelecimento.css";

export default function ListaEstabelecimentos({ match }) {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [categoria, setCategoria] = useState({ nome: "" });
  const [cidade, setCidade] = useState({ nome: "" });
  const idcidade = match.params.idcidade;
  const idcategoria = match.params.idcategoria;

  useEffect(() => {
    async function carregarEstabelecimentos() {
      const response = await api.get(
        "/estabelecimentos/" + idcidade + "/" + idcategoria
      );
      setEstabelecimentos(response.data);

      const responseCategoria = await api.get("/categorias/" + idcategoria);
      setCategoria(responseCategoria.data);

      const responseCidade = await api.get("/cidades/" + idcidade);
      setCidade(responseCidade.data);
    }
    carregarEstabelecimentos();
  }, []);

  const definirBackground = () => {
    if (idcategoria == 1) {
      // HortiFruti
      return "bkgHortiFruiti";
    }
    if (idcategoria == 2) {
      // Confeitaria
      return "bkgConfeitaria";
    }
    if (idcategoria == 3) {
      // Serviços
      return "bkgServicos";
    }
    if (idcategoria == 4) {
      //Outros
      return "bkgOutros";
    }
  };

  return (
    <Container>
      <Cabecalho />
      <Container>
        <Row className="nomeCategoria">
          <h3>
            {cidade.nome ? cidade.nome + " - " : ""}
            {categoria.nome}
          </h3>
        </Row>
      </Container>
      <CardColumns className="cardColumnsEstabelecimentos">
        {estabelecimentos.map((estabelecimento) => (
          <Card
            key={estabelecimento.id}
            text="black"
            className={definirBackground()}
          >
            <Card.Body>
              <Card.Title>{estabelecimento.nome}</Card.Title>
              <Card.Text>
                {"Tipo de Produto: " + estabelecimento.tipo}
              </Card.Text>
              <Card.Text>{"Telefone: " + estabelecimento.telefone}</Card.Text>
              <Card.Text>{"Whatsapp: " + estabelecimento.whatsapp}</Card.Text>
              <Card.Text>
                {"Responsável: " + estabelecimento.responsavel}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
}
