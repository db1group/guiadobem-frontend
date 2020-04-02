import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cabecalho.css";
import ModalNovoParceiro from "./ModalNovoParceiro";
import imgLogo from "../imagens/logo-guia-do-bem.png";

export default function Cabecalho(props, { history }) {
  const [exibirModal, setexibirModal] = useState(false);

  const clicouFechar = () => setexibirModal(false);
  const clicouExibir = () => setexibirModal(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Link to="/">
          <img src={imgLogo} alt="ícone" width="50px" height="50px" />
        </Link>
        <Navbar.Brand className="textoCabecalho" href="/">
          {" "}
          GUIA DO BEM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Navbar.Brand
              className="textoOpcoes"
              action
              onClick={e => clicouExibir()}
            >
              Novo Parceiro
            </Navbar.Brand>
            {/* <Navbar.Brand className="textoOpcoes" href="/sobre">
              Sobre
            </Navbar.Brand> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ModalNovoParceiro
        exibirModal={exibirModal}
        clicouFechar={clicouFechar}
      />
    </>
  );
}
