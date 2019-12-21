import React from "react";
import classnames from 'classnames'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

// TESTE OU EXEMPLOS
import {
    Img
} from '../../assets/css/pages/Tratamentos/Single'
import serv1 from '../../assets/image/exemplos/servicos/serv1.jpg';

// MEUS COMPONENTS
import {H1, H2} from "../../Component/ui/Title";
import PrateleiraHorizontal from "../../Component/estrutura/PrateleiraHorizontal";

// ICONS MATERIAL-UI
import {
    IconCalend,
    IconTel,
    IconWhpp,
    IconEmail
} from '../../assets/css/pages/Tratamentos/Single/Icons'

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PopoverHeader from "reactstrap/es/PopoverHeader";
import PopoverBody from "reactstrap/es/PopoverBody";
import UncontrolledPopover from "reactstrap/lib/UncontrolledPopover";

export default class Single extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            trat: {
                title: 'ÓRTESE',
                text: "Antissepsia, remoção da onicofose/calo subungueal com 3 aplicações em 3 meses.",
                text2: 'Dispositivo utilizado para correção da unha encravada com FMM (Fibra de Memória Molecular).',
                img: serv1,
                duracao: '00:30 Hs',
                id: '1'
            },
            activeTab : '1',
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
            ]
        }
    }

    toggle = tab =>{
        if(this.state.activeTab !== tab) this.setState({activeTab: tab});
    };

    render() {

        return(
            <div style={{minHeight: '750px'}}>

                <Container className='mt-5 pt-5'>

                    <Row className='mt-3'>
                        <Col lg='5' md='6' sm="12">
                            <Img src={this.state.trat.img}/>
                        </Col>
                        <Col lg='7' md='6' sm="12">

                            <H1>{this.state.trat.title}</H1>

                            <p style={{fontSize: '15pt', textAlign: 'justify'}}>
                                {this.state.trat.text}
                            </p>

                            <div className='p-2' style={{borderRadius: '10px', background: '#C6EBBF'}}>
                                <p style={{fontSize: '15pt', textAlign: 'justify'}}>
                                    {this.state.trat.text2}
                                </p>
                            </div>

                            <Row>
                                <Col className='mt-5' lg='12' md='12'>

                                    <H2>Agende Sua Consulta</H2>

                                    <div className="ml-auto mr-auto">
                                        <a target='_blank' href={'http://api.whatsapp.com/send?1=pt_BR&phone=5521983439308'}>
                                            <i><IconWhpp /></i>
                                        </a>

                                        <a href='tel:212544-6337'>
                                            <i><IconTel /></i>
                                        </a>

                                        <a id="PopoverLegacy" href={null}>
                                            <i><IconCalend /></i>
                                        </a>

                                        <a href={null}>
                                            <i><IconEmail /></i>
                                        </a>
                                        <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
                                            <PopoverHeader>Calendário</PopoverHeader>
                                            <PopoverBody>
                                                Em breve marcação online direto pelo Site com seu cadastro de clientes
                                            </PopoverBody>
                                        </UncontrolledPopover>
                                    </div>

                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>

                <Container className='container-fluid mt-5'>

                    <PrateleiraHorizontal list={this.state.listServicos} tipo={'tratamento'}/>

                    <div className='alignAll-center mt-5'>
                        <h2>Ver Todos os nossos Tratamentos</h2>
                    </div>

                </Container>

            </div>
        );
    }

}