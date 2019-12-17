import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './style.css';

import serv1 from '../../../assets/image/bgTeste1.jpg';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import CardSubtitle from "reactstrap/es/CardSubtitle";


// One item component
// selected prop will be passed
const Tratamentos = ({ title, text, img, id }) => {
    return (
        <Card className='cardServicos col-sm-1 col-4 '>
            <CardImg className='cardImgServicos' top width="100%" src={img} alt="Card image cap" />
            <CardBody className='cardServBody'>
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
};

const Produtos = ({ title, text, img, id }) => {
    return (
        <section className='cardServicos col-sm-1 col-4 '>
            <CardImg className='cardImgServicos' top width="100%" src={img} alt="Card image cap" />
            <CardBody className='cardServBody'>
                <CardTitle>{title}</CardTitle>
                <Button>Button</Button>
            </CardBody>
        </section>
    );
};

// All items component
// Important! add unique key
const Menu = (list, tipo) => list.map(el => {
    const { title, text, img, id } = el;

    if(tipo === 'tratamento'){
        return (
            <Tratamentos
                title={title}
                text={text}
                img={img}
                id-id
                key={id}
            />
        );
    }else if(tipo === 'produtos'){
        return (
            <Produtos
                title={title}
                text={text}
                img={img}
                id-id
                key={id}
            />
        );
    }


});


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >
            {(text === 'prev') ?
                <ArrowBackIosIcon/>
                :
                <ArrowForwardIosIcon/>
            }
        </div>
    );
};


const ArrowLeft = Arrow({ text: 'prev', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: 'next', className: 'arrow-next' });

class Index extends Component {
    state = {
        selected: 0
    };

    onSelect = key => {
        this.setState({ selected: key });
    };


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(this.props.list, this.props.tipo);

        return (
            <div style={{height: '400px'}}>
                <ScrollMenu
                    data={menu}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                    alignCenter={false}
                />
            </div>
        );
    }
}

export default Index;