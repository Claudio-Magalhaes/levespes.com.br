import React from "react";

import Header from '../../Component/estrutura/Header'
import { ContainerBranco } from '../../Component/ui/Container/ContainerBranco';

import bg from '../../assets/image/bgTeste1.jpg'
import serv1 from '../../assets/image/exemplos/servicos/serv1.jpg';
import bg6 from '../../assets/image/bgCont6.png'

import PrateleiraHorizontal from '../../Component/estrutura/PrateleiraHorizontal'

import './style.css'

import 'animate.css'
import ScrollMagic from "scrollmagic";

import { baseDeCores as cores} from '../../_core/Variable'

import { CardBeneficios } from '../../Component/ui/Card/CardBeneficios'
import { H1 } from '../../Component/ui/Title'



export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listServicos:  [
                {
                    title: 'Massagem I',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '01:40 Hs',
                    id: '1'
                },
                {
                    title: 'Massagem II',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '2'
                },
                {
                    title: 'Pacote de Terapias II',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '3'
                },
                {
                    title: 'Hidratação Exclusiva',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '4'
                },
                {
                    title: 'Corte de Unhas',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '5'
                },
                {
                    title: 'Convencional',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '6'
                },
                {
                    title: 'Infantil',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '7'
                },
                {
                    title: 'Órtese',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '8'
                },
                {
                    title: 'Exclusivo',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '9'
                },
                {
                    title: 'Unha Encravada',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '10'
                },
                {
                    title: 'Cauterização e Curativos',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '11'
                },
                {
                    title: 'Pacote de Terapias I',
                    text: "Some quick example text to build on the card title and make up the bulk of...",
                    img: serv1,
                    duracao: '00:40 Hs',
                    id: '12'
                }
            ],
            listProdutos: [
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
            ],
            listBeneficios: [
                {
                    titulo: 'Fissura',
                    text: 'Fissura é o ressecamento da pele acentuada, com hiperqueratose, perda da elasticidade da' +
                        'pele, que pode atingir os tecidos profundos levando ao sangramento.' +
                        'Tratamento; remoção do excesso de céculas mortas, lixamento e hidratação com cremes e' +
                        'vapor de ozônio.'
                },
                {
                    titulo: 'Órtese',
                    text: 'Dispositivo com fibra molecular (FMM) para correção de unha encravada ou atrofiada.' +
                        'Tratamento; profilaxia e remoção de calo sub ungueal (embaixo da unha), é trocado a cada 30' +
                        'dias, em média 6 trocas dependendo da evolução do crescimento da unha hidratação da' +
                        'cutícula (hiponíquio)'
                },
                {
                    titulo: 'Unha encravada',
                    text: 'Onicocriptose (unha encravada), eritema (vermelhidão), dor e edema (inchaço).' +
                        'Tratamento; Remoção da espícula, aplicação de alta frequência para acelerar a cicatrização,' +
                        'curativo e orientações.'
                },
                {
                    titulo: 'Calosidade',
                    text: 'É o espessamento da pele devido ao excesso de pressão continua no local.' +
                        'Tratamento; realizar a remoção da calosidade lixando, hidratando e orientações para cuidados' +
                        'domiciliares.'
                },
                {
                    titulo: 'Micose (Onicomicose)',
                    text: 'A unha é acometida por fungo, modificando seu aspecto, cor, espessamento, odor e leito' +
                        'ungueal.' +
                        'Tratamento; consiste em limpeza do local afetado, remoção da laceração sob a lâmina, corte' +
                        'correto e aplicação de antifúngico. Importante a colaboração do cliente/paciente nos cuidados' +
                        'domiciliares para a evolução do tratamento'
                },
                {
                    titulo: 'Benefícios',
                    text: 'Proporcionar relaxamento, alivio a tensão, dores e estresse, causando sensação de alívio,' +
                        'leveza e bem estar.'
                },
            ]
        };

        this.controller = new ScrollMagic.Controller();

    }

    componentDidMount() {

        ScrollMagic._util.addClass = function _patchedAddClass(elem, classname) {
            if (classname) {
                if (elem.classList) {
                    classname.split(' ').forEach(function _addCls(c) {
                        elem.classList.add(c);
                    });
                } else elem.className += ' ' + classname;
            }
        };
        ScrollMagic._util.removeClass = function _patchedRemoveClass(elem, classname) {
            if (classname) {
                if (elem.classList) {
                    classname.split(' ').forEach(function _removeCls(c) {
                        elem.classList.remove(c);
                    });
                } else elem.className = elem.className.replace(new RegExp('(^|\b)' + classname.split(' ').join('|') + '(\b|$)', 'gi'), ' ');
            }
        };

        this.animate();

        // // build scenes
        // new ScrollMagic.Scene({
        //     triggerElement: '#Container4'
        // })
        //     .setClassToggle(".textBoxContainer4", "animated bounceInLeft show")
        //     .addTo(this.controller);
        //
        // new ScrollMagic.Scene({
        //     triggerElement: '#Container4'
        // })
        //     .setClassToggle(".imgBoxContainer4", "animated bounceInRight")
        //     .addTo(this.controller);
    }

    animate = () => {
        new ScrollMagic.Scene({
            triggerElement: '#Container6'
        })
            .setClassToggle(".showCont6", "animated pulse hide show")
            .addTo(this.controller);
    };

    testeScroll = () => {
        alert('ok');
    };

    render() {

        return(
            <>
                <Header/>
                <ContainerBranco>
                    <H1>UM PÓUCO SOBRE A PODOLOGIA</H1>
                    <p style={{textAlign: "justify"}}>
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>

                </ContainerBranco>

                <hr/>

                <div className='container'>
                    <div className="row col-12" id="Container3">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Os Benefícios e tratamentos da Podologia</h2>
                        </div>

                        <div className="row text-center">

                            {this.state.listBeneficios.map(d => (
                                <CardBeneficios key={'beneficios-'+d.titulo} bg={null} className="col-md-4 col-lg-4">
                                    <div className=" imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">

                                    </div>

                                    <h4 className="service-heading pt-2">{d.titulo}</h4>
                                    <p className="text-muted">{d.text}</p>
                                </CardBeneficios>
                            ))}

                            {/*<div className="col-md-4 col-lg-4">*/}
                            {/*    <div className="imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">*/}
                            {/*        v*/}
                            {/*    </div>*/}

                            {/*    <h4 className="service-heading pt-2">E-Commerce</h4>*/}
                            {/*    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>*/}
                            {/*</div>*/}


                        </div>
                    </div>

                </div>


                <div id='Container4' onAnimationEnd={this.testeScroll} className='container-fluid Container4'>
                    <div className='row'>
                        <div className='col-md-6 mt-5 textBoxContainer4 hide'>

                            <H1>Relação Tempo Benefício</H1>
                            <p className='mt-3 tteste' style={{textAlign: "justify"}}>
                                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                            </p>

                        </div>
                        <div id='teste' style={{backgroundImage: 'url("'+bg+'")'}} className='col-md-6 pt-auto mb-auto imgBoxContainer4'>

                        </div>
                    </div>
                </div>


                <div id='Container5' className='container-fluid mt-5'>

                    <PrateleiraHorizontal list={this.state.listServicos} tipo={'tratamento'}/>

                    <div className='alignAll-center mt-5'>
                        <h2>Ver Todos os nossos Tratamentos</h2>
                    </div>
                </div>

                <div id='Container6' className='container-fluid'>
                    <div className='row'>

                        <div id='teste' style={{backgroundImage: 'url("'+bg6+'")'}} className='col-md-7 pt-auto mb-auto'>

                        </div>

                        <div className='col-md-5'>

                            <H1  fontSize={'4rem'} className='showCont6' color={'white'}>Estamos Pertinho!</H1>
                            <p className='mt-3 tteste' style={{textAlign: "justify"}}>

                            </p>

                        </div>
                    </div>
                </div>


                <div id='Container7' className='container-fluid'>
                    <h4>Veja També</h4>
                    <h3>Produtos Disponíveis</h3>
                    {/*<PrateleiraHorizontal list={this.state.listProdutos} tipo={'produtos'}/>*/}
                </div>
            </>
        );
    }

}