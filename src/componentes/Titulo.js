import React, {Component } from 'react';
import { Row } from "react-bootstrap";
import { FaAngleLeft } from "react-icons/fa";

import "./Titulo.css";

export default class Titulo extends Component {
    
    render() {
        const { children, botaoVoltarClique } = this.props;

        return (
            <Row className="titulo">
                <div onClick={botaoVoltarClique} className="botaoVoltar">
                    <FaAngleLeft size="35px" />
                </ div>
                <h3>{children}</h3>
                <span />
            </Row>    
        );
    }
}