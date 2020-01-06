import React from "react";

import {DivMap,
    DivMainContato,
    DivEmail,
    Contatos
} from "../../assets/css/pages/Contato";

import {baseDeCores as cores} from '../../_core/Variable'

import Email from "../../Component/estrutura/Email";
import Row from "reactstrap/es/Row";
import Container from "reactstrap/es/Container";
import {H1, H2, H3} from "../../Component/ui/Title";

import {Divider} from "../../Component/ui/Divider";
import {GoogleApiWrapper} from 'google-maps-react';
import map from "../../assets/image/exemplos/map.png"

import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

// ICONS
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

class Contato extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.data.pagesActive('Contato');
    }

    render() {

        return(
            <DivMainContato>

                <Container>
                    <Row>

                        <DivMap background={map} className='col-lg-6 col-md-12'>

                        </DivMap>

                        <div className='col-lg-6 col-md-12 mt-md-2'>
                            <H1
                                color='verdeEscuro'
                                textAlign='center'
                                fontSize={true}
                                fontBold={true}
                            >
                                Edifício Garagem Menezes Cortes
                            </H1>
                            <H3
                                color='verdeEscuro'
                                textAlign='center'
                                fontSize={true}
                                fontBold={true}
                            >
                                Rua São José - N: 35 - Loja 104 - Centro, Rio de Janeiro, RJ
                            </H3>
                            <H2
                                color='verdeAmarelado'
                                textAlign='center'
                                fontSize={true}
                                fontBold={true}
                            >
                                Aberto de Segunda a sexta, das 08:00Hs ás 19:00Hs
                            </H2>

                            <List
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        <H2 color='verdeAmarelado'>Nossos Contatos</H2>
                                    </ListSubheader>
                                }
                            >
                                <ListItem button>
                                    <ListItemIcon className='icon-list-footer'>
                                        <WhatsAppIcon style={{color: cores.verdeEscuro}}/>
                                    </ListItemIcon>
                                    <Contatos className='text-list-footer'>(21) 98343-3908</Contatos>
                                </ListItem>

                                <ListItem button>
                                    <ListItemIcon className='icon-list-footer'>
                                        <PhoneIcon style={{color: cores.verdeEscuro}}/>
                                    </ListItemIcon>
                                    <Contatos className='text-list-footer'>(21) 2544-6337 / 98343-3908</Contatos>
                                </ListItem>

                                <a target='_blank' style={{textDecoration: 'none'}} href={'https://www.facebook.com/LevesPesPodologia/'}>
                                    <ListItem button>
                                        <ListItemIcon className='icon-list-footer'>
                                            <FacebookIcon style={{color: cores.verdeEscuro}}/>
                                        </ListItemIcon>
                                        <Contatos className='text-list-footer'>Nosso Página</Contatos>
                                    </ListItem>
                                </a>


                                <ListItem button>
                                    <ListItemIcon className='icon-list-footer'>
                                        <AlternateEmailIcon style={{color: cores.verdeEscuro}}/>
                                    </ListItemIcon>
                                    <Contatos className='text-list-footer'>contato@levespes.com.br</Contatos>
                                </ListItem>
                            </List>
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