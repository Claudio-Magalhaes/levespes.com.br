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

import PopoverHeader from "reactstrap/es/PopoverHeader";
import PopoverBody from "reactstrap/es/PopoverBody";
import UncontrolledPopover from "reactstrap/lib/UncontrolledPopover";

export default class Single extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            trat: null
        }
    }

    componentDidMount() {

        let id = this.props.match.params.id;

        this.setState({
            trat: this.props.data.tratamentos(`${id}`)
        });
    }

    toggle = tab =>{
        if(this.state.activeTab !== tab) this.setState({activeTab: tab});
    };

    render() {

        return(
            <div style={{minHeight: '750px'}}>

                {(this.state.trat === null) ?
                    null
                    :
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
                }

                <Container className='container-fluid mt-5'>

                    <PrateleiraHorizontal list={this.props.data.produtos()} tipo={'produtos'}/>

                </Container>

            </div>
        );
    }

}