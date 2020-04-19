import React from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import { FaAngleLeft } from "react-icons/fa";
import imgLogoCords from "../imagens/logo-cords.png";
import imgLogoDB1 from "../imagens/logo-db1.png";
import imgAjude from "../imagens/ajude.png";
import "./Sobre.css";

function Sobre({history}) {
  return (
    <Container>
      <Cabecalho />
      <Container className="fundoSobre">
        <br></br>
        <Row className="tituloSobre">
          <div onClick={history.goBack} className="botaoVoltar">
            <FaAngleLeft size="35px" />
          </ div>
          <h3>APRESENTAÇÃO</h3>
        </Row>
        <br></br>
        <Row className="textoSobre">
          <span>
            Você encontrará neste Guia diversos produtores e prestadores de
            serviços locais, prontos para oferecer seus produtos e serviços,
            feitos com amor e carinho para todos nós.
          </span>
        </Row>
        <br></br>
        <Row className="textoAjude">
          <h6>
            AJUDE A COMUNIDADE LOCAL A CONTINUAR SE DESENVOLVENDO, MESMO EM
            TEMPOS DE CRISE!
          </h6>
        </Row>
        <br></br>
        <Row className="imagensSobre">
          <Col xs={3} className="imagemCords">
            <img src={imgLogoCords} alt="Cords" width="70%" height="70%" />
          </Col>
          <Col xs={6} className="imagemAjude">
            <img src={imgAjude} alt="Ajude" width="60%" height="60%" />
          </Col>
          <OverlayTrigger
            key="sobre"
            placement="bottom"
            overlay={<Tooltip id="tooltip-bottom">Site DB1 Group</Tooltip>}
          >
            <Col xs={3} className="imagemDB1">
              <a href="https://www.db1group.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src={imgLogoDB1}
                  alt="DB1 Group"
                  width="70%"
                  height="70%"
                />
              </a>
            </Col>
          </OverlayTrigger>
        </Row>
        <br></br>
        <Row>
          <span className="textoSobre">
            Caso encontre algum tipo de erro ou tenha alguma sugestão de
            melhoria, por favor enviar e-mail para cords@db1.com.br, avaliaremos
            a aplicabilidade de todas elas.
          </span>
        </Row>
      </Container>
    </Container>
  );
}

export default Sobre;
