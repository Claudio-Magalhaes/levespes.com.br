import React from 'react';
import {Container} from "@material-ui/core";
import Row from "reactstrap/es/Row";

import './style.css';


export default class ContainerEdit extends React.Component{
    constructor(props){
        super(props);
        this.state= {

        }
    }

    render() {

        return (
            <Container className={'containerPadrao ' + this.props.className}>
                <Row className={'alignAll-center containerPadrao'}>
                {this.props.children}
                </Row>
            </Container>

        )
    }
}