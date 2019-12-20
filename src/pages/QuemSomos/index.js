import React from "react";

import Header from '../../Component/estrutura/Header'
import { ContainerBranco } from '../../Component/ui/Container/ContainerBranco';

import './style.css'

export default class QuemSomos extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <>
                <ContainerBranco>
                    <h1>Um Pouco Sobre Nós</h1>
                    <p style={{textAlign: 'justify'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </ContainerBranco>

                <ContainerBranco>
                    <div className='row d-inline-flex align-content-between'>
                        <div className='col-lg-2'>
                            <div className="imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">
                                v
                            </div>
                        </div>
                        <div className='col-lg-10 mr-auto'>
                            <h1>Um Pouco Sobre Nós</h1>
                            <p style={{textAlign: 'justify'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </ContainerBranco>

                <ContainerBranco>
                    <div className='row d-inline-flex align-content-between'>
                        <div className='col-lg-10 mr-auto'>
                            <h1>Um Pouco Sobre Nós</h1>
                            <p style={{textAlign: 'justify'}}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className='col-lg-2'>
                            <div className="imgCardContainer3 alignAll-center ml-auto mr-auto mb-2">
                                v
                            </div>
                        </div>
                    </div>
                </ContainerBranco>
            </>
        );
    }

}