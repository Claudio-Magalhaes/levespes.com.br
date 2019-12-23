import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './style.css';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

import CardServicos  from "../../../Component/ui/Card/CardServicos";
import CardProdutos  from "../../../Component/ui/Card/CardProdutos";
import {H3} from "../../ui/Title";

// One item component
// selected prop will be passed
const Tratamentos = ({ title, text, img, id, duracao }) => {
    return (
        <CardServicos data={{ title, text, img, id, duracao }} />
    );
};

const Produtos = ({ title, text, img, id }) => {
    console.log(img);
    return (
        <CardProdutos data={{ title, text, img, id }}/>
    );
};

// All items component
// Important! add unique key
const Menu = (list, tipo) => list.map(el => {
    const { title, text, img, id, duracao } = el;

    if(tipo === 'tratamento'){
        return (
            <Tratamentos
                title={title}
                text={text}
                img={img}
                id={id}
                key={id}
                duracao={duracao}
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
            <div>
                <div className={this.props.className} style={{height: 'auto'}}>
                    <ScrollMenu
                        data={menu}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        alignCenter={false}
                    />
                </div>
                 <div className='mt-4 mb-3'>
                     {(this.props.tipo === 'tratamento')?
                         <a href='/tratamentos'>
                             <H3>Veja Todos os Tratamentos</H3>
                         </a>
                     :
                         null
                     }
                 </div>
            </div>
        );
    }
}

export default Index;