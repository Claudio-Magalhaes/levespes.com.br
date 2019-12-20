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
            listServicos: [
                {
                    title: 'Massagem I',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '01:40 Hs',
                    id: '3'
                },
                {
                    title: 'Massagem II',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '4'
                },
                {
                    title: 'Pacote de Terapias I',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '5'
                },
                {
                    title: 'Pacote de Terapias II',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '6'
                },
                {
                    title: 'Hidratação Exclusiva',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '7'
                },
                {
                    title: 'Corte de Unhas',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '8'
                },
                {
                    title: 'Convencional',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '9'
                },
                {
                    title: 'Infantil',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '10'
                },
                {
                    title: 'Órtese',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '2'
                },
                {
                    title: 'Exclusivo',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '2'
                },
                {
                    title: 'Unha Encravada',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '1'
                },
                {
                    title: 'Cauterização e Curativos',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '1'
                }
            ]
        }
    }

    render() {

        return(
            <>
                <Container className='mt-5 pt-5'>
                    <div className='row'>

                        {this.state.listServicos.map(s =>(
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