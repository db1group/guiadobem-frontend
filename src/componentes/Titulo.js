import React, {Component } from 'react';
import { Row } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

import "./Titulo.css";

export default class Titulo extends Component {
    
    render() {
        const { children, botaoVoltarClique } = this.props;

        return (
            <Row className="titulo" style={{flexWrap:"nowrap"}}>
                <div onClick={botaoVoltarClique} className="botaoVoltar">
                    <FaAngleLeft size="35px" />
                </ div>
                <div style={{textAlign: "center"}} className="textotitulo">
                    {children}
                </div>

                <span />
            </Row>    
        );
    }
}