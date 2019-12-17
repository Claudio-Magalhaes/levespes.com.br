import React from "react";

import Header from '../../Component/estrutura/Header'
import Container from '../../Component/ui/Container';
import Servicos from '../../Component/ui/Servicos'

import bg from '../../assets/image/bgTeste1.jpg'
import serv1 from '../../assets/image/exemplos/servicos/serv1.jpg';

import PrateleiraHorizontal from '../../Component/estrutura/PrateleiraHorizontal'

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './style.css'



export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: 'Serviço 1',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '1'
                },
                {
                    title: 'Serviço 2',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '2'
                },
                {
                    title: 'Serviço 3',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '3'
                },
                {
                    title: 'Serviço 4',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '4'
                },
                {
                    title: 'Serviço 5',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '5'
                },
                {
                    title: 'Serviço 6',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '6'
                },
                {
                    title: 'Serviço 7',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '7'
                },
                {
                    title: 'Serviço 8',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '8'
                },
                {
                    title: 'Serviço 9',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '9'
                },
                {
                    title: 'Serviço 10',
                    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
                    img: serv1,
                    id: '10'
                },
            ]
        }
    }

    render() {

        return(
            <>
                <Header/>
                <Container>
                    <h1 className=''>Um Pouco mais sobre a Podologia</h1>
                    <p style={{textAlign: "justify"}}>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>

                </Container>


                <div className='container'>
                    <div className="row col-12" id="Container3">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Os Benefícios e tratamentos da Podologia</h2>
                        </div>

                        <div className="row text-center">
                            <div className="col-md-4 col-lg-3">
                                <span className="fa-stack fa-4x">
                                    <i className="fa fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>

                                <h4 className="service-heading">E-Commerce</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>

                            <div className="col-md-4 col-lg-3">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                                <h4 className="service-heading">E-Commerce</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                            <div className="col-md-4 col-lg-3">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                                <h4 className="service-heading">E-Commerce</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                            <div className="col-md-4 col-lg-3">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                                <h4 className="service-heading">E-Commerce</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div id='Container4' className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-6 mt-5'>

                            <h1>Relação Tempo Benefício</h1>
                            <p className='mt-3' style={{textAlign: "justify"}}>
                                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                            </p>

                        </div>
                        <div id='teste' style={{backgroundImage: 'url("'+bg+'")'}} className='col-md-6 pt-auto mb-auto'>

                        </div>
                    </div>
                </div>


                <div id='Container5' className='container-fluid mt-5'>

                    <PrateleiraHorizontal list={this.state.list} tipo={'tratamento'}/>

                    <div className='alignAll-center mt-5'>
                        <h2>Ver Todos os nossos Tratamentos</h2>
                    </div>
                </div>


                <div id='Container6' className='container-fluid'>

                </div>

                <div id='Container7' className='container-fluid'>
                    <h4>Veja També</h4>
                    <h3>Produtos Disponíveis</h3>
                    <PrateleiraHorizontal list={this.state.list} tipo={'produtos'}/>
                </div>
            </>
        );
    }

}