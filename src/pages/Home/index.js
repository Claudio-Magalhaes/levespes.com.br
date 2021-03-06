import React from "react";

import Header from '../../Component/estrutura/Header'
import { ContainerBranco } from '../../Component/ui/Container/ContainerBranco';

import bgCont4 from '../../assets/image/bgCont4.jpg'
import bg6 from '../../assets/image/bgCont6.png'


import PrateleiraHorizontal from '../../Component/estrutura/PrateleiraHorizontal'

import './style.css'

import 'animate.css'
import ScrollMagic from "scrollmagic";

import {
    Container6,
    Cont6Span,
    Container6Bg,
    Container4Bg
} from '../../assets/css/pages/Home'

import {Divider} from "../../Component/ui/Divider";

import {
    VerdeEscuro as BtnVerdeEscuro
} from '../../Component/ui/Butons/VerdeEscuro'

import Calosidade from '../../assets/image/Home_Beneficios/Calosidade.png'
import Fissuras from '../../assets/image/Home_Beneficios/Fissuras.png'
import Micose from '../../assets/image/Home_Beneficios/Micose.png'
import UnhaEncravada from '../../assets/image/Home_Beneficios/Unha_encravada.png'
import Ortese from '../../assets/image/Home_Beneficios/Ortese.png'
import Beneficios from '../../assets/image/Home_Beneficios/Beneficios.png'

import { CardBeneficios } from '../../Component/ui/Card/CardBeneficios'
import {H1, H2, H3, H4} from '../../Component/ui/Title'


export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            mobile: true,
            listBeneficios: [
                {
                    titulo: 'Fissura',
                    img: Fissuras,
                    text: 'Fissura é o ressecamento da pele acentuada, com hiperqueratose, perda da elasticidade da pele, que pode atingir os tecidos profundos levando ao sangramento. Tratamento; remoção do excesso de células mortas, lixamento e hidratação com cremes e vapor de ozônio.'
                },
                {
                    titulo: 'Órtese',
                    img: Ortese,
                    text: 'Dispositivo com fibra molecular (FMM) para correção de unha encravada ou atrofiada. Tratamento; profilaxia e remoção de calo sub ungueal (embaixo da unha), é trocado a cada 30 dias, em média 6 trocas dependendo da evolução do crescimento da unha hidratação da cutícula (hiponíquio)'
                },
                {
                    titulo: 'Unha encravada',
                    img: UnhaEncravada,
                    text: 'Onicocriptose (unha encravada), eritema (vermelhidão), dor e edema (inchaço). Tratamento; Remoção da espícula, aplicação de alta frequência para acelerar a cicatrização, curativo e orientações.'
                },
                {
                    titulo: 'Calosidade',
                    img: Calosidade,
                    text: 'É o espessamento da pele devido ao excesso de pressão continua no local. Tratamento; realizar a remoção da calosidade lixando, hidratando e orientações para cuidados domiciliares.'
                },
                {
                    titulo: 'Micose (Onicomicose)',
                    img: Micose,
                    text: 'A unha é acometida por fungo, modificando seu aspecto, cor, espessamento, odor e leito ungueal. Tratamento; consiste em limpeza do local afetado, remoção da maceração sob a lâmina, corte correto e aplicação de antifúngico. Importante a colaboração do cliente/paciente nos cuidados domiciliares para a evolução do tratamento'
                },
                {
                    titulo: 'Benefícios',
                    img: Beneficios,
                    text: 'Proporcionar relaxamento, alivio a tensão, dores e estresse, causando sensação de alívio, leveza e bem estar.'
                },
            ]
        };

        this.controller = new ScrollMagic.Controller();

    }

    componentDidMount() {

        this.props.data.pagesActive('Home');

        ScrollMagic._util.addClass = function _patchedAddClass(elem, classname) {
            if (classname) {
                if (elem.classList) {
                    classname.split(' ').forEach(function _addCls(c) {
                        elem.classList.add(c);
                    });
                } else elem.className += ' ' + classname;
            }
        };
        // ScrollMagic._util.removeClass = function _patchedRemoveClass(elem, classname) {
        //     if (classname) {
        //         if (elem.classList) {
        //             classname.split(' ').forEach(function _removeCls(c) {
        //                 elem.classList.remove(c);
        //             });
        //         } else elem.className = elem.className.replace(new RegExp('(^|\b)' + classname.split(' ').join('|') + '(\b|$)', 'gi'), ' ');
        //     }
        // };

        if(this.resizeFunction()){
            this.animate();
        }

    };

    resizeFunction = () => {
        if (window.innerWidth <= 540) {
            this.setState({mobile: false});
            return false;
        }else{
            return true;
        }
    };

    animate = () => {

        // Container 2
        // ==============================================
        new ScrollMagic.Scene({
            triggerElement: '.cont2Header'
        })
            .setClassToggle(".cont2Header", "animated bounceInLeft")
            .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '.container2'
        })
            .setClassToggle(".cont2Text", "animated bounceInRight")
            .addTo(this.controller);

        //Container 3
        //==============================================
        new ScrollMagic.Scene({
            triggerElement: '#container2'
        })
            .setClassToggle(".showCont3", "animated fadeInDown")
            .addTo(this.controller);

        //Container 4
        //==============================================
        new ScrollMagic.Scene({
            triggerElement: '#Container4'
        })
            .setClassToggle(".showCont4Title", "animated zoomInDown")
            .addTo(this.controller);

        new ScrollMagic.Scene({
            triggerElement: '.showCont4Title'
        })
            .setClassToggle(".showCont4Text", "animated zoomInDown")
            .addTo(this.controller);

        //Container 5
        //==============================================
        new ScrollMagic.Scene({
            triggerElement: '#container5'
        })
            .setClassToggle(".showCont5", "animated bounceInRight")
            .addTo(this.controller);

        //Container 6
        //==============================================
        new ScrollMagic.Scene({
            triggerElement: '#Container6'
        })
            .setClassToggle(".showCont6", "animated fadeInLeft")
            .addTo(this.controller);

        //Container 7
        //==============================================
        new ScrollMagic.Scene({
            triggerElement: '#Container7'
        })
            .setClassToggle(".showCont7", "animated fadeInRight")
            .addTo(this.controller);

    };

    render() {

        let hide = (this.state.mobile === true) ? 'animatedHide' : '';

        return(
            <>
                <Header/>

                <ContainerBranco id='container2'>

                    <div className='container2'>
                        <H1  className={`cont2Header ${hide}`} color='verdeEscuro'>UM POUCO SOBRE A PODOLOGIA</H1>
                        <p className={`cont2Text ${hide}`} style={{textAlign: "center"}}>
                            Podologia: Podologia origina-se do grego tendo como prefixo e Sufixo:<br/>
                            Podo ⇨ Pé.<br/>
                            Logos ⇨ tratado, conhecimento e estudo.<br/>
                            A podologia é da área da saúde que estuda patologias dos membros inferiores.<br/>
                            Esta ciência é dedicada a diagnosticar, prevenir e tratar da saúde dos pés e proporcionar bem estar.<br/>
                            O profissional podólogo aplica a podologia nas intervenções:<br/>
                            *Infantil (podopediatria)<br/>
                            *Idoso (podogeriatria)<br/>
                            *Pé de risco (problemas circulatórios dos membros inferiores) – diabético<br/>
                            *Preventiva<br/>
                        </p>
                    </div>

                </ContainerBranco>

                <Divider className='showCont3' />

                <div id='Containet3' className='container'>
                    <div className="row col-12" id="Container3">
                        <div className="col-lg-12 text-center">
                            <H2 className="section-heading">Os Benefícios e tratamentos da Podologia</H2>
                        </div>

                        <div className="row text-center">

                            {this.state.listBeneficios.map(d => (
                                <CardBeneficios key={'beneficios-'+d.titulo} bg={null} className={`col-md-4 col-lg-4 ${hide} showCont3`}>
                                    {/*<div className='CircImgCardContainer3 alignAll-center ml-auto mr-auto mb-2'>*/}
                                    {/*    <div className=" imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">*/}

                                    {/*    </div>*/}
                                    {/*</div>*/}

                                    <H3 fontBold={true} className="service-heading pt-2">{d.titulo}</H3>
                                    <p className="text-muted">{d.text}</p>
                                </CardBeneficios>
                            ))}


                        </div>
                    </div>

                </div>

                {/*<div id='Container4' className='container-fluid Container4'>*/}
                {/*    <div className='row'>*/}
                {/*        <div className='col-md-6 mt-5 textBoxContainer4 hide'>*/}

                {/*            <H1 fontSize='3rem' className={`showCont4Title ${hide}`}>Relação Tempo Benefício</H1>*/}
                {/*            <p className={`mt-3 ml-4 mr-2 showCont4Text ${hide}`} style={{textAlign: "justify"}}>*/}
                {/*                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.*/}
                {/*            </p>*/}

                {/*        </div>*/}
                {/*        <Container4Bg id='Cont4BgImg' className='col-md-6 pt-auto mb-auto imgBoxContainer4'>*/}
                {/*            <img className='imgBoxContainer4' src={bgCont4} />*/}
                {/*        </Container4Bg>*/}
                {/*    </div>*/}
                {/*</div>*/}


                <div id='Container5' className='container-fluid mt-5'>

                    <PrateleiraHorizontal className={`showCont5 ${hide}`} list={this.props.data.tratamentos()} tipo={'tratamento'}/>

                </div>

                <Container6 id="Container6" className='container-fluid'>
                    <div className='row'>

                        <Container6Bg className={`col-md-7 pt-auto mb-auto showCont6 ${hide}`}>
                            <img src={bg6} />
                        </Container6Bg>

                        <div className='divInfoCont6 col-md-5 mt-auto mb-auto'>

                            <H1 fontBold={true} className={`showCont6 ${hide}`}>Estamos Pertinho!</H1>
                            <H2 fontBold={true} className={`showCont6 ${hide}`}>Edifício Garagem Menezes Cortes</H2>

                            <Cont6Span className={`showCont6 ${hide}`} fontBold={true} fontSize={'2rem'}> Rua São José - N: 35 - Loja 104</Cont6Span>
                            <Cont6Span className={`showCont6 ${hide}`} fontBold={true} fontSize={'2rem'}> Centro, Rio de Janeiro, RJ</Cont6Span>
                            <Cont6Span className={`showCont6 ${hide}`} fontBold={true} fontSize={'2rem'}> Venha nos visitar</Cont6Span>

                            <div className='rowBtnCont6 row alignAll-center'>
                                <a target='_blank' href="https://wego.here.com/directions/mix/mylocation/e-eyJuYW1lIjoiTGV2ZXMgUFx1MDBlOXMiLCJhZGRyZXNzIjoiUnVhIFNcdTAwZTNvIEpvc1x1MDBlOSAtIDM1IC0gTG9qYSAxMDQsIFJpbyBkZSBKYW5laXJvIiwibGF0aXR1ZGUiOi0yMi45MDUzMjk0LCJsb25naXR1ZGUiOi00My4xNzUzNTc5LCJwcm92aWRlck5hbWUiOiJmYWNlYm9vayIsInByb3ZpZGVySWQiOjEwMDQ4NzUwNDc5Njc3OX0=?map=-22.90533,-43.17536,15,normal&fb_locale=pt_BR">
                                    <BtnVerdeEscuro className={`showCont6 m-1 ${hide}`} hover='verdeAmarelado'> Ver no Mapa </BtnVerdeEscuro>
                                </a>
                                <a href='/contato'>
                                    <BtnVerdeEscuro  className={`showCont6 m-1 ${hide}`} hover='verdeAmarelado'> Ir a Contatos </BtnVerdeEscuro>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container6>

                <div id='Container7' className={`container-fluid mt-3 showCont7 ${hide}`}>
                    <H4 fontBold={true} fontSize={'3rem'}>Produtos disponíveis em nossa loja</H4>
                    <PrateleiraHorizontal list={this.props.data.produtos()} tipo={'produtos'}/>
                </div>
            </>
        );
    }
}