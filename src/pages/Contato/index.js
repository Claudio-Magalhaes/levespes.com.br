import React from "react";

import Header from '../../Component/estrutura/Header'
import Email from "../../Component/estrutura/Email";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import {DivMap, DivMainContato, DivEmail} from "../../assets/css/pages/Contato";
import {H3} from "../../Component/ui/Title";
import {Cont6Span} from "../../assets/css/pages/Home";
import {Divider} from "../../Component/ui/Divider";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import map from "../../assets/image/exemplos/map.png"

class Contato extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <DivMainContato>

                <Container>
                    <Row>

                        <DivMap background={map} className='col-lg-6 col-md-6'>

                        </DivMap>

                        <div className='col-lg-6 col-md-6'>
                            <Cont6Span className='showCont6' fontBold={true} fontSize={'2rem'}> Rua São José - N: 35 - Loja 104 - Centro, Rio de Janeiro, RJ</Cont6Span>
                            <Cont6Span className='showCont6' fontBold={true} fontSize={'2rem'}> Centro, Rio de Janeiro, RJ</Cont6Span>
                            <Cont6Span className='showCont6' fontBold={true} fontSize={'2rem'}> Venha nos visitar</Cont6Span>
                        </div>
                    </Row>
                </Container>

                <Divider/>

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

export default GoogleApiWrapper({
    apiKey: ("b2a7c0816a6f4b3145173e1af2a128dcfca0a108")
})(Contato);