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
                        Maria Terezinha possui 9 anos de atuação na área da podologia, Edilma Ribeiro possui 4 anos
                        de atuação na área da podologia. O destino nos uniu a 2 anos quando nos conhecemos numa
                        mesma empresa.
                        Sempre conversamos sobre o sonho de ter um espaço para chamar de nosso, ter nossa
                        liberdade e autonomia profissional.
                        Certo dia, decidimos mudar de vida e sair da zona de conforto, a Maria Terezinha foi a primeira
                        a tomar a iniciativa sair a procura de um local para alugar, daí percebi a seriedade a
                        profundidade do desejo da concretização do nosso sonho. Procuramos um espaço por 6 meses
                        até que após inúmeras pesquisas, localizamos o nosso espaço atual.
                        No período de 2 meses reformamos o espaço e o deixamos de acordo as exigências da
                        vigilância sanitária e confortável para profissionais e clientes.
                        Com muita fé e determinação estamos batalhando para conquistar nosso espaço e
                        reconhecimento, pois acreditamos no nosso serviço de excelência e amor a profissão nos fará
                        vencer e quebrar qualquer barreira
                    </p>
                </ContainerBranco>

                <Divider/>

                {/*<ContainerBranco>*/}
                {/*    <div className='row d-inline-flex align-content-between'>*/}
                {/*        <div className='col-lg-3'>*/}
                {/*            <div className="imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">*/}
                {/*                <img src={atavar}/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className='col-lg-9 mr-auto'>*/}
                {/*            <H1>Thereza</H1>*/}
                {/*            <p style={{textAlign: 'justify'}}>*/}
                {/*                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</ContainerBranco>*/}

                {/*<Divider/>*/}

                {/*<ContainerBranco>*/}
                {/*    <div className='row d-inline-flex align-content-between'>*/}
                {/*        <div className='col-lg-9 mr-auto'>*/}
                {/*            <H1>Edilma</H1>*/}
                {/*            <p style={{textAlign: 'justify'}}>*/}
                {/*                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.*/}
                {/*            </p>*/}
                {/*        </div>*/}
                {/*        <div className='col-lg-3'>*/}
                {/*            <div className="imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">*/}
                {/*                <img src={atavar}/>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</ContainerBranco>*/}
            </>
        );
    }

}