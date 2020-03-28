import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ModalNovoParceiro(props) {
  const [cidade, setCidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [whatsapp, setwhatsapp] = useState("");
  const [responsavel, setResponsavel] = useState("");

  function incluirNovoParceiro(event) {
    event.preventDefault();
    const parceiro = {};
    parceiro.cidade = cidade;
    parceiro.categoria = categoria;
    parceiro.tipo = tipo;
    parceiro.telefone = telefone;
    parceiro.whatsapp = whatsapp;
    parceiro.responsavel = responsavel;
    console.log({ parceiro });
    setCidade("");
    setCategoria("");
    setNome("");
    setTipo("");
    setTelefone("");
    setwhatsapp("");
    setResponsavel("");
    props.clicouFechar();
  }

  return (
    <Modal
      show={props.exibirModal}
      onHide={props.clicouFechar}
      animation={true}
    >
      <Modal.Header>
        <Modal.Title>Novo Parceiro</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={incluirNovoParceiro}>
          <Form.Group>
            <Form.Control
              as="select"
              value={cidade}
              required
              onChange={e => setCidade(e.target.value)}
            >
              <option value="" disabled hidden>
                Selecione uma Cidade
              </option>
              <option>Maringá</option>
              <option>Campo Grande</option>
              <option>Presidente Prudente</option>
              <option>Outras</option>
            </Form.Control>
            <Form.Control
              as="select"
              value={categoria}
              required
              onChange={e => setCategoria(e.target.value)}
            >
              <option value="" disabled hidden>
                Selecione uma Categoria
              </option>
              <option>Horti-fruti</option>
              <option>Confeitaria</option>
              <option>Serviços</option>
              <option>Outros Itens</option>
            </Form.Control>
            <Form.Control
              type="text"
              value={nome}
              required
              placeholder="Digite o nome"
              onChange={e => setNome(e.target.value)}
            />
            <Form.Control
              type="text"
              value={tipo}
              required
              placeholder="Tipo produto/serviço"
              onChange={e => setTipo(e.target.value)}
            />
            <Form.Control
              type="text"
              value={telefone}
              required
              placeholder="Telefone"
              onChange={e => setTelefone(e.target.value)}
            />
            <Form.Control
              type="text"
              value={whatsapp}
              required
              placeholder="WhatsApp"
              onChange={e => setwhatsapp(e.target.value)}
            />
            <Form.Control
              type="text"
              value={responsavel}
              required
              placeholder="Responsável"
              onChange={e => setResponsavel(e.target.value)}
            />
          </Form.Group>
          <Button variant="secondary" onClick={props.clicouFechar}>
            Cancelar
          </Button>
          {"  "}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
