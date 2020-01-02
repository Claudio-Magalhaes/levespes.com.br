import React from "react";

import Header from '../../Component/estrutura/Header'
import { ContainerBranco } from "../../Component/ui/Container/ContainerBranco";

import {Container, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import CardServicos  from "../../Component/ui/Card/CardServicos";
import serv1 from '../../assets/image/exemplos/servicos/serv1.jpg';

export default class Tratamento extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
        }
    }


    render() {

        return(
            <>
                <Container className='mt-5 pt-5'>
                    <div className='row'>

                        {this.props.data.tratamentos().map(s =>(
                            <>
                                <CardServicos data={s} />
                            </>
                        ))}

                    </div>

                </Container>
            </>
        );
    }

}