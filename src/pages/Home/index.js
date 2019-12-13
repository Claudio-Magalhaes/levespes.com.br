import React from "react";

import Header from '../../Component/estrutura/Header'
import Container from '../../Component/ui/Container';
import Servicos from '../../Component/ui/Servicos'

import bg from '../../assets/image/bgTeste1.jpg'

import './style.css'

export default class Home extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <>
                <Header/>
                <Container>
                    <h1 className=''>Um Pouco mais sobre a Leves Pés</h1>
                    <p style={{textAlign: "justify"}}>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>

                </Container>


                <div className='container'>
                    <div className="row" id="Container3">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Os Benefícios da Podologia</h2>
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
                        <div className='col-md-6'>

                        </div>
                        <div id='teste' style={{backgroundImage: 'url("'+bg+'")'}} className='col-md-6 pt-auto mb-auto'>

                        </div>
                    </div>
                </div>


                <div className='container mt-5'>
                    <div className='row'>

                        <Servicos data={{
                            title: 'Serviço 1',
                            img: bg
                        }}/>
                        <Servicos data={{
                            title: 'Serviço 1',
                            img: bg
                        }}/>
                        <Servicos data={{
                            title: 'Serviço 1',
                            img: bg
                        }}/>
                        <Servicos data={{
                            title: 'Serviço 1',
                            img: bg
                        }}/>
                    </div>
                    <div className='alignAll-center mt-5'>
                        <h2>Ver Todos os nossos Tratamentos</h2>
                    </div>
                </div>


                <div style={{height: '700px'}}>
                    espaço
                </div>
            </>
        );
    }

}