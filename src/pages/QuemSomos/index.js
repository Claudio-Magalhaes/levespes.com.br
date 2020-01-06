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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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