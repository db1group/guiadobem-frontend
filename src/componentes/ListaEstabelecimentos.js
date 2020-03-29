import React, { useEffect, useState } from "react";
import { Container, CardColumns, Card } from "react-bootstrap";
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import "./ListaEstabelecimento.css";

export default function ListaEstabelecimentos({ match }) {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const idcidade = match.params.idcidade;
  const idcategoria = match.params.idcategoria;

  useEffect(() => {
    async function carregarEstabelecimentos() {
      // const response = await api.get(
      //   "/estabelecimentos/" + idcidade + "/" + idcategoria
      // );
      // setCategorias(response.data);
      setEstabelecimentos([
        {
          id: 57,
          nome: "Adriano Feirante ",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "44 99933-3563",
          whatsapp: "",
          responsavel: "Adriano ",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 51,
          nome: "Agrofenix",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 41,
          nome: "Banca da Elisa",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 99808-1436",
          whatsapp: "(44) 99814-0767",
          responsavel: "Elisa e Cleon",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 55,
          nome: "Barraca do Erick ( Feira do Produtor)",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44)99103-1998 ",
          whatsapp: "",
          responsavel: "Erick",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 48,
          nome: "Barraca do Gaviolli",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44)99726-2991",
          whatsapp: "(44)99805-5340",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 47,
          nome: "Carlos Frutaria (caminhão da esquina do Bosque)",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 99707-5781",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 40,
          nome: "Cia Sasaki",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 98402-8929",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 54,
          nome:
            "Da roça para mesa - Gustavo (Entregas 5,00 pedidos acima de 30,00 Isento)",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 99996-3060",
          whatsapp: "",
          responsavel: "Gustavo Peralta Demori",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 56,
          nome: "Empório & Cia",
          tipo: "Alimentos Saudáveis, Proteina de Soja, Temperos, Sucrilhos",
          telefone: "(44) 99930-6161 ",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 52,
          nome: "Horitfruti Delivery",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 99843-2526",
          whatsapp: "44) 99751-1383",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 49,
          nome: "Horta Eco Digital",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 42,
          nome: "Horta Seleta",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 99980-4670",
          whatsapp: "",
          responsavel: "Graziela",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 46,
          nome: "Katsu Alimentos",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 99927-8984",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 53,
          nome: "Leonardo Martinez (Entregas em Maringá, Marialva e Sarandi)",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 98836-2701 ",
          whatsapp: "(44) 99953-5458",
          responsavel: "Leonardo Martinez",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 50,
          nome: "My Fruit",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 44,
          nome: "Naturalis Agroecologia",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "44) 99745-9929",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 58,
          nome: "Pasioli Morangos",
          tipo: "Morangos",
          telefone: "44 9977-9783 ",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 45,
          nome: "Pontal Nature Orgânicos",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44) 99103-6328",
          whatsapp: "",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        },
        {
          id: 43,
          nome: "Sacolão Tropical",
          tipo: "Legumes, Verduras e Frutas",
          telefone: "(44)3226-8689",
          whatsapp: "(44)99139-0452",
          responsavel: "",
          urlLogo: "",
          publicar: true,
          cidadeId: 1,
          categoriaId: 1,
          base64Image: null,
          nomeArquivo: null
        }
      ]);
    }
    carregarEstabelecimentos();
  }, []);

  return (
    <Container>
      <Cabecalho titulo="Maringá" />
      <CardColumns>
        {estabelecimentos.map(estabelecimento => (
          <Card
            border="primary"
            bg="secondary"
            key={estabelecimento.id}
            text="white"
          >
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
