import React, { useEffect, useState } from "react";
import { Container, CardColumns, Card } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaEstabelecimento.css";

export default function ListaEstabelecimentos({ match }) {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [categoria, setCategoria] = useState({ nome: "" });
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
      <Cabecalho />
      <CardColumns>
        {estabelecimentos.map(estabelecimento => (
          <Card key={estabelecimento.id} text="black">
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
