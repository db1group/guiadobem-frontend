import React, { Component } from "react";
import { Container, CardColumns, Card, Row, Form } from "react-bootstrap";
import { FaPhone, FaUser, FaBarcode, FaWhatsapp } from 'react-icons/fa';
import { possuiTexto, textoIgual } from '../util/utilidade';
import api from "../services/api";
import Cabecalho from "./Cabecalho";
import Titulo from "./Titulo";

import "./ListaEstabelecimento.css";

export default class ListaEstabelecimentos extends Component {

  PLANOFUNDO = [
    "bkgHortiFruiti", 
    "bkgConfeitaria", 
    "bkgServicos", 
    "bkgOutros"
  ]

  TIPOSTEXTO = {
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

  state = {  
    estabelecimentos: [],
    estabelecimentosFiltrados: [],
    textoTitulo: "",
    textoPesquisado: "",
    idCidade: "",
    idCategoria: "",
  }

  async componentDidMount() {
    const {idcidade, idcategoria} = this.props.match.params;
    const responseCategoria = await api.get(`/categorias/${idcategoria}`);
    const responseCidade = await api.get(`/cidades/${idcidade}`);   
    const textoTitulo = `${responseCidade.data.nome} - ${responseCategoria.data.nome}`;

    this.setState({
      textoTitulo: `${responseCidade.data.nome ? textoTitulo : responseCategoria.data.nome} ` 
    });    

    const response = await api.get(`/estabelecimentos/${idcidade}/${idcategoria}`);
    this.setState({
      estabelecimentos: response.data,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { estabelecimentos } = this.state;

    if (prevState.estabelecimentos !== estabelecimentos) {
        this.atualizarEstabelecimentosFiltrados();
    }
  }

  atualizarEstabelecimentosFiltrados = () => {
    const { textoPesquisado, estabelecimentos } = this.state;    
    
    if (!textoPesquisado || textoPesquisado === "") {
      this.setState({
        estabelecimentosFiltrados: estabelecimentos,
      });

      return;
    }

    const estabelecimentosFiltrados = estabelecimentos.filter(estabelecimento => {
        return possuiTexto(estabelecimento.nome, textoPesquisado)
          || possuiTexto(estabelecimento.tipo, textoPesquisado)
          || possuiTexto(estabelecimento.telefone, textoPesquisado)
          || possuiTexto(estabelecimento.whatsapp, textoPesquisado)
          || possuiTexto(estabelecimento.responsavel, textoPesquisado);
    });
    
    this.setState({
      estabelecimentosFiltrados: estabelecimentosFiltrados,
    })  
  }

  

  render() {
    const { history } = this.props;
    const { textoTitulo, estabelecimentosFiltrados } = this.state;

    return (
      <Container>
        <Cabecalho />
        <Container>
            <Titulo botaoVoltarClique={history.goBack}>
              {textoTitulo}
            </Titulo>
            {this.renderFiltro()}
        </Container>
        <CardColumns className="cardColumnsEstabelecimentos">
          {estabelecimentosFiltrados.map((estabelecimento) => (
            <Card
              key={estabelecimento.id}
              text="black"
              className={this.definirPlanoFundo()}
            >
              <Card.Body>
                <Card.Title>{this.renderTitulo(estabelecimento.nome)}</Card.Title>
                {this.renderCorpo(estabelecimento)}
              </Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Container>
    );
  }

  renderFiltro = () => (
      <Form>
        <Row>
          <Form.Control as="input" 
                        id="filtro-estabelecimentos" 
                        type="text"
                        name="filtro-estabelecimentos"
                        placeholder="Filtrar estabelecimentos"
                        autoComplete="off"
                        onChange={this.mudarPesquisa} 
          />
        </Row>
      </Form>
  )

  mudarPesquisa = (event, valid) => {
    const { value } = event.target;
    this.setState({
        textoPesquisado: value,
    }, () => {
        this.atualizarEstabelecimentosFiltrados();
    })
  }

  definirPlanoFundo = () => {
    const { idcategoria } = this.props.match.params;
    return this.PLANOFUNDO[idcategoria-1]    
  };

  renderTitulo = (texto) => {
    const { textoPesquisado } = this.state;
    return (
        <span style={{fontWeight:"bold"}}>{this.destacarTexto(texto, textoPesquisado)}</span>
    )
  }

  renderCorpo = (estabelecimento) => {

    return (
      <>
        <div className="tipo-texto-card">{this.renderTexto("tipoproduto", estabelecimento.tipo)}</div>
        <div className="tipo-texto-card">{this.renderTexto("telefone", estabelecimento.telefone)}</div>
        <div className="tipo-texto-card">{this.renderTexto("whatsapp", estabelecimento.whatsapp)}</div>
        <div className="tipo-texto-card">{this.renderTexto("responsavel", estabelecimento.responsavel)}</div>
      </>
    )
  }
  renderTexto = (tipo, texto) => {
    const { textoPesquisado } = this.state;

    if (!texto || !tipo) {
      return undefined
    }

    const tipoTexto = this.TIPOSTEXTO[tipo];
    return (
      <div>
        <div>{tipoTexto.icone} <span style={{fontWeight:"bold"}}>{tipoTexto.rotulo}</span></div>
        <div>{this.destacarTexto(texto, textoPesquisado)}</div>
      </div>
    )
  }
  
  destacarTexto = (texto, destaque) => {
      if (!texto || !destaque) {
          return texto;
      }
      
      const partes = texto.split(new RegExp(`(${destaque})`, 'gi'));

      return (
        <span>
          {partes.map(
            parte => (textoIgual(parte, destaque)) 
              ? <span style={{fontWeight: "bold", backgroundColor: "rgba(201, 76, 76, 0.3)"}}>{parte}</span> 
              : parte
            )}
        </span>);
  }
}