import React, { useState } from "react";
import { Navbar, Nav, Tooltip, OverlayTrigger } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cabecalho.css";
import ModalNovoParceiro from "./ModalNovoParceiro";
import imgLogo from "../imagens/logo-guia-do-bem.png";

export default function Cabecalho(props, { history }) {
  const [exibirModal, setexibirModal] = useState(false);
  const [tooltipNovoParceiro, setTooltipNovoParceiro] = useState(true);

  const clicouFechar = () => {
    setexibirModal(false);
    setTooltipNovoParceiro(true);
  };
  const clicouExibir = () => {
    setexibirModal(true);
    setTooltipNovoParceiro(false);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <OverlayTrigger
          key="home"
          placement="bottom"
          overlay={<Tooltip id="tooltip-bottom">Home</Tooltip>}
        >
          <Link to="/">
            <img src={imgLogo} alt="ícone" width="50px" height="50px" />
          </Link>
        </OverlayTrigger>
        <OverlayTrigger
          key="home-titulo"
          placement="bottom"
          overlay={<Tooltip id="tooltip-bottom">Home</Tooltip>}
        >
          <Navbar.Brand className="textoCabecalho" href="/">
            {" "}
            GUIA DO BEM
          </Navbar.Brand>
        </OverlayTrigger>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {tooltipNovoParceiro ? (
              <OverlayTrigger
                key="novo-parceiro"
                placement="bottom"
                overlay={
                  <Tooltip id="tooltip-bottom">
                    Ajude a economia local :)
                  </Tooltip>
                }
              >
                <Navbar.Brand
                  className="textoOpcoes"
                  // action
                  onClick={(e) => clicouExibir()}
                >
                  Novo Parceiro
                </Navbar.Brand>
              </OverlayTrigger>
            ) : (
              <Navbar.Brand
                className="textoOpcoes"
                // action
                onClick={(e) => clicouExibir()}
              >
                Novo Parceiro
              </Navbar.Brand>
            )}
            <OverlayTrigger
              key="sobre"
              placement="bottom"
              overlay={
                <Tooltip id="tooltip-bottom">Conheça o nosso Projeto</Tooltip>
              }
            >
              <Navbar.Brand className="textoOpcoes" href="/sobre">
                Sobre
              </Navbar.Brand>
            </OverlayTrigger>
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
