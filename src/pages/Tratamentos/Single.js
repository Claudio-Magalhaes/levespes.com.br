import React from "react";
import {
    Container,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody
} from 'reactstrap';

import {baseDeCores as cores} from '../../_core/Variable';

// TESTE OU EXEMPLOS
import {
    Img,
    PopoverHeader,
    PopoverBody,
    Valor
} from '../../assets/css/pages/Tratamentos/Single'

// MEUS COMPONENTS
import {H1, H2, H3} from "../../Component/ui/Title";
import PrateleiraHorizontal from "../../Component/estrutura/PrateleiraHorizontal";

// ICONS MATERIAL-UI
import {
    IconCalend,
    IconTel,
    IconWhpp,
    IconEmail
} from '../../assets/css/pages/Tratamentos/Single/Icons'

import UncontrolledPopover from "reactstrap/lib/UncontrolledPopover";
import {Divider} from "../../Component/ui/Divider";
import Email from "../../Component/estrutura/Email";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

export default class Single extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            trat: null,
            modal: false
        }
    }

    componentDidMount() {

        this.props.data.pagesActive('Tratamentos');

        let id = this.props.match.params.id;

        this.setState({
            trat: this.props.data.tratamentos(`${id}`)
        });
    }

    toggle = tab =>{
        if(this.state.activeTab !== tab) this.setState({activeTab: tab});
    };

    toggleModal = () => {
        this.setState({
            modal : !this.state.modal
        })
    };

    render() {

        return(
            <div style={{minHeight: '750px'}}>

                {(this.state.trat === null) ?
                    null
                    :
                    <>
                    <Container className='mt-5 pt-5'>

                        <Row className='mt-3'>
                            <Col lg='5' md='6' sm="12">
                                <Img src={this.state.trat.img}/>
                            </Col>
                            <Col lg='7' md='6' sm="12" cssModule={{height: 'auto'}}>

                                <H1>{this.state.trat.title}</H1>

                                <p style={{fontSize: '12pt', textAlign: 'justify'}}>
                                    {this.state.trat.text}
                                </p>
                                <Valor lg='12' md='12' sm='12'>
                                    <Col md={6} lg={6} sm={12} className={'karalho'}>
                                        <H1
                                            color='verdeAmarelado'
                                            fontBold={true}
                                            fontSize={'2.3rem'}
                                        >
                                            <AccessAlarmIcon
                                                style={{fontSize: '2.5rem', color: cores.verdeAmarelado}}
                                            />
                                              {this.state.trat.duracao}
                                        </H1>
                                    </Col>
                                    <Col md={6} lg={6} sm={12} className={'karalho2'}>
                                        <H1 fontSize={'2.3rem'} fontBold={true} textAlign='right'>
                                            R$:{this.state.trat.valor}
                                        </H1>
                                    </Col>
                                </Valor>
                            </Col>
                        </Row>

                        {(
                            typeof this.state.trat.text2 === "undefined" ||
                            this.state.trat.text2 === null ||
                            this.state.trat.text2 === '' ||
                            this.state.trat.text2 === " "
                        ) ?
                            null
                            :
                            <Row className='mt-3'>
                                <Col lg='12' md='12' sm='12'>
                                    <div className='p-2' style={{borderRadius: '10px', background: '#C6EBBF'}}>
                                        <p style={{fontSize: '15pt', textAlign: 'justify'}}>
                                            {this.state.trat.text2}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        }

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

                                    <a onClick={this.toggleModal} href={null}>
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
                    </Container>

                    <Modal isOpen={this.state.modal} size='lg' toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}><H3 fontBold={true} textAlign='center'>Enviar E-mail</H3></ModalHeader>
                        <ModalBody>
                            <Email
                                retorno={this.toggleModal}
                                message={`Olá, gostaria de agendar uma consulta para o tratamento '${this.state.trat.title}'. \n`}>
                                <div className='alignAll-center mt-3 mb-0 pb-0'>
                                    <p style={{'fontSize': '14px',
                                        'lineHeight': '16px',
                                        'textAlign': 'center',
                                        'color': '#909090'
                                    }}>Seu endereço de e-mail não será publicado. Os campos obrigatórios estão marcados com *</p>
                                </div>
                            </Email>
                        </ModalBody>
                    </Modal>
                </>
                }

                <Divider/>

                <Container className='container-fluid mt-5'>

                    <PrateleiraHorizontal list={this.props.data.produtos()} tipo={'produtos'}/>

                </Container>

            </div>
        );
    }
}