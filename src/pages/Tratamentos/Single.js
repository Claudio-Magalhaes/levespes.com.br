import React from "react";
import classnames from 'classnames'

import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import {
    Img
} from '../../assets/css/pages/Tratamentos/Single'

import serv1 from '../../assets/image/exemplos/servicos/serv1.jpg';
import {H1} from "../../Component/ui/Title";

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
            activeTab : '1'
        }
    }

    toggle = tab =>{
        if(this.state.activeTab !== tab) this.setState({activeTab: tab});
    };

    render() {

        return(
            <div style={{minHeight: '750px'}}>
                <Container className='mt-5 pt-5'>

                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Descrição do Tratamento
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Informações do Tratamento
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row className='mt-3'>
                                <Col lg='5' md='5' sm="12">
                                    <Img src={this.state.trat.img}/>
                                </Col>
                                <Col lg='7' md='7' sm="12">

                                    <H1>{this.state.trat.title}</H1>

                                    <p style={{fontSize: '15pt'}}>
                                        {this.state.trat.text}
                                    </p>

                                    <div className='p-2' style={{borderRadius: '10px', background: '#C6EBBF'}}>
                                        <p style={{fontSize: '15pt', textAlign: 'justify'}}>
                                            {this.state.trat.text2}
                                        </p>
                                    </div>

                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                                <Col sm="6">
                                    <Card body>
                                        <CardTitle>Special Title Treatment</CardTitle>
                                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                        <Button>Go somewhere</Button>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>

                </Container>
            </div>
        );
    }

}