import React, { useEffect, useState } from "react";
import { Container, CardColumns, Card } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaEstabelecimento.css";

export default function ListaEstabelecimentos({ match }) {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [categoria, setCategoria] = useState([]);
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
    }
    carregarEstabelecimentos();
  }, []);

  return (
    <Container>
      <Cabecalho titulo={categoria.nome || "Guia do Bem"} />
      <CardColumns>
        {estabelecimentos.map(estabelecimento => (
          <Card bg="secondary" key={estabelecimento.id} text="white">
            <Card.Body>
              <Card.Title>{estabelecimento.nome}</Card.Title>
              <Card.Text>{estabelecimento.tipo}</Card.Text>
              <Card.Text>{estabelecimento.telefone}</Card.Text>
              <Card.Text>{estabelecimento.whatsapp}</Card.Text>
              <Card.Text>{estabelecimento.responsavel}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
}
