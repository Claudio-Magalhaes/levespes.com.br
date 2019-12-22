import React from "react";

import Header from '../../Component/estrutura/Header'
import Email from "../../Component/estrutura/Email";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import {DivMap, DivMainContato, DivEmail} from "../../assets/css/pages/Contato";
import {H3} from "../../Component/ui/Title";
import {Cont6Span} from "../../assets/css/pages/Home";

export default class Contato extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <DivMainContato>

                <Container>
                    <Row>
                        <DivMap className='col-7'>

                        </DivMap>

                        <div className='col-5'>
                            <Cont6Span className='showCont6' fontBold={true} fontSize={'2rem'}> Rua São José - N: 35 - Loja 104</Cont6Span>
                            <Cont6Span className='showCont6' fontBold={true} fontSize={'2rem'}> Centro, Rio de Janeiro, RJ</Cont6Span>
                            <Cont6Span className='showCont6' fontBold={true} fontSize={'2rem'}> Venha nos visitar</Cont6Span>
                        </div>
                    </Row>
                </Container>

                <DivEmail>
                    <Email>

                        <H3 className='card-title fontCinza hoverAzul'>ENTRE EM CONTATO</H3>

                        <div className='alignAll-center mt-3 mb-0 pb-0'>
                            <p style={{'fontSize': '14px',
                                'lineHeight': '16px',
                                'textAlign': 'center',
                                'color': '#909090'
                            }}>Seu endereço de e-mail não será publicado. Os campos obrigatórios estão marcados com *</p>
                        </div>

                    </Email>
                </DivEmail>

            </DivMainContato>
        );
    }

}