import React from "react";
import {Container, Row, Col, NavLink} from 'reactstrap';

import './style.css'
import {H1, H2} from "../../ui/Title";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// ICONS
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';


export const Footer = () => (
    <div id='Footer' className='card-footer'>
        <Container>
            <Row>
                <Col lg={4} md={4} className='content-list-footer'>

                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <H2 color='Branco'>Tratamentos</H2>
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer  d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>Hidratação Exclusiva</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>Órtese</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>Infantil</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>Cauterização e Curativos</ListItemText>
                        </ListItem>

                    </List>

                </Col>
                <Col lg={4} md={4} className='content-list-footer'>

                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <H2 color='Branco'>Produtos</H2>
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>EsfoliaDerm</ListItemText>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon className='icon-list-footer d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>HydraDerm</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>Hydra M</ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer d-lg-block d-sm-none d-md-none'>
                                <></>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>KeraDerm</ListItemText>
                        </ListItem>

                    </List>

                </Col>
                <Col lg={4} md={4} className='content-list-footer'>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <H2 color='Branco'>Nossos Contatos</H2>
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <ListItemIcon className='icon-list-footer'>
                                <WhatsAppIcon style={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>(21) 98343-3908</ListItemText>
                        </ListItem>

                        <ListItem button>
                            <ListItemIcon className='icon-list-footer'>
                                <PhoneIcon style={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>(21) 2544-6337 / 98343-3908</ListItemText>
                        </ListItem>

                        <a target='_blank' style={{textDecoration: 'none'}} href={'https://www.facebook.com/LevesPesPodologia/'}>
                            <ListItem button>
                                <ListItemIcon className='icon-list-footer'>
                                    <FacebookIcon style={{color: 'white'}}/>
                                </ListItemIcon>
                                <ListItemText className='text-list-footer'>Nosso Página</ListItemText>
                            </ListItem>
                        </a>


                        <ListItem button>
                            <ListItemIcon className='icon-list-footer'>
                                <AlternateEmailIcon style={{color: 'white'}}/>
                            </ListItemIcon>
                            <ListItemText className='text-list-footer'>contato@levespes.com.br</ListItemText>
                        </ListItem>
                    </List>
                </Col>
            </Row>
        </Container>
    </div>
);