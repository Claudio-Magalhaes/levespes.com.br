import React from "react";

import { ContainerBranco } from '../../Component/ui/Container/ContainerBranco';
import atavar from "../../assets/image/exemplos/avatar.png"

import './style.css'
import {H1} from "../../Component/ui/Title";
import {Divider} from "../../Component/ui/Divider";

export default class QuemSomos extends React.Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.data.pagesActive('Quem Somos');
    }

    render() {

        return(
            <>
                <ContainerBranco className={'mt-5 pt-5'}>
                    <H1 color='verdeEscuro'>Um Pouco Sobre Nós</H1>
                    <p style={{textAlign: 'justify'}}>
                        A história da Leves Pés Podologia teve início  a partir do sonho conjunto de duas profissionais
                        com ampla experiência. Maria Terezinha atua desde o ano de 2013 na área da podologia e Edilma
                        Ribeiro, desde 2017. Foram unidas pelo destino em 2017, quando se conheceram em uma mesma
                        empresa. “Sempre conversamos sobre o sonho de ter um espaço para chamar de nosso, ter nossa
                        liberdade e autonomia profissional.” “Certo dia, decidimos mudar de vida e sair da zona de
                        conforto, a Maria Terezinha foi a primeira a tomar a iniciativa, daí percebi a seriedade a
                        profundidade do desejo da concretização do nosso sonho.” Em um curto período de tempo, o espaço
                        escolhido foi reformado para se adequar às exigências da vigilância sanitária e demais órgãos
                        competentes, visando proporcionar conforto e bem estar para profissionais e clientes. “Com muita
                        fé e determinação estamos batalhando para conquistar nosso espaço e reconhecimento, pois acreditamos
                        no nosso serviço de excelência e amor a profissão nos fará vencer e quebrar qualquer barreira.”
                    </p>
                </ContainerBranco>

                <Divider/>

                <ContainerBranco>
                    <div className='row d-inline-flex align-content-between'>
                        <div className='col-lg-3'>
                            <div className="imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">
                                <img src={atavar}/>
                            </div>
                        </div>
                        <div className='col-lg-9 mr-auto'>
                            <H1>Thereza</H1>
                            <p style={{textAlign: 'justify'}}>
                                Técnica em podologia pelo SENAC.
                                Tecnólogo em podologia UNICESUMAR (Incompleto).
                                Promoção a saúde podal SENAC
                                Prevenção de alterações podais SENAC
                                Reflexologia e saúde podal SENAC
                            </p>
                        </div>
                    </div>
                </ContainerBranco>

                <Divider/>

                <ContainerBranco>
                    <div className='row d-inline-flex align-content-between'>
                        <div className='col-lg-9 mr-auto'>
                            <H1>Edilma</H1>
                            <p style={{textAlign: 'justify'}}>
                                Técnica em podologia pelo SENAC.
                                Tecnólogo em podologia UNICESUMAR (Cursando).
                                Promoção a saúde podal SENAC
                                Prevenção de alterações podais SENAC
                                Reflexologia e saúde podal SENAC
                                Drenagem linfática manual em podologia SENAC
                                Podologia especializada SENAC
                            </p>
                        </div>
                        <div className='col-lg-3'>
                            <div className="imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">
                                <img src={atavar}/>
                            </div>
                        </div>
                    </div>
                </ContainerBranco>
            </>
        );
    }
}