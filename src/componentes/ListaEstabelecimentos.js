import React, { useEffect, useState } from "react";
import { Container, CardColumns, Card, Row } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaEstabelecimento.css";
import { FaPhone, FaUser, FaBarcode, FaWhatsapp } from 'react-icons/fa';

export default function ListaEstabelecimentos({ match }) {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [categoria, setCategoria] = useState({ nome: "" });
  const [cidade, setCidade] = useState({ nome: "" });
  const idcidade = match.params.idcidade;
  const idcategoria = match.params.idcategoria;
  const TIPOSTEXTO = {
    telefone: {
      icone: <FaPhone />,
      rotulo: 'Telefone',
    },
    responsavel: {
      icone: <FaUser />,
      rotulo: 'Responsável',
    },
    tipoproduto: {
      icone: <FaBarcode />,
      rotulo: 'Tipo de produto',
    },
    whatsapp: {
      icone: <FaWhatsapp />,
      rotulo: 'Whatsapp',
    }
  }  
  const PLANOFUNDO = [
    "bkgHortiFruiti", 
    "bkgConfeitaria", 
    "bkgServicos", 
    "bkgOutros"
  ]
  
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

  const definirPlanoFundo = () => {
    return PLANOFUNDO[idcategoria-1]    
  };

  const renderTexto = (tipo, texto) => {
    if (!texto || !tipo) {
      return undefined
    }

    return (
      <div>
        <div>{TIPOSTEXTO[tipo].icone} <span style={{fontWeight:"bold"}}>{TIPOSTEXTO[tipo].rotulo}</span></div>
        <div>{texto}</div>
      </div>
    )
  }

  const renderTitulo = (texto) => {
    return (
        <span style={{fontWeight:"bold"}}>{texto}</span>
    )
  }

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
            className={definirPlanoFundo()}
          >
            <Card.Body>
              <Card.Title>{renderTitulo(estabelecimento.nome)}</Card.Title>
              <Card.Text>{renderTexto("tipoproduto", estabelecimento.tipo)}</Card.Text>
              <Card.Text>{renderTexto("telefone", estabelecimento.telefone)}</Card.Text>
              <Card.Text>{renderTexto("whatsapp", estabelecimento.whatsapp)}</Card.Text>
              <Card.Text>{renderTexto("responsavel", estabelecimento.responsavel)}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Container>
  );
}
