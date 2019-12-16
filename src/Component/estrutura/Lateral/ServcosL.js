import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './style.css';

import serv1 from '../../../assets/image/bgTeste1.jpg';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

// list of items
const list = [
    {
        title: 'Serviço 1',
        text: 'Some quick example text to build on the card title and make up the bulk of the card',
        img: serv1,
        id: '1'
    },
    {
        title: 'Serviço 2',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '2'
    },
    {
        title: 'Serviço 3',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '3'
    },
    {
        title: 'Serviço 4',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '4'
    },
    {
        title: 'Serviço 5',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '5'
    },
    {
        title: 'Serviço 6',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '6'
    },
    {
        title: 'Serviço 7',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '7'
    },
    {
        title: 'Serviço 8',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '8'
    },
    {
        title: 'Serviço 9',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '9'
    },
    {
        title: 'Serviço 10',
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        img: serv1,
        id: '10'
    },
];

// One item component
// selected prop will be passed
const MenuItem = ({ title, text, img, id }) => {
    return (
        <Card className='cardServicos col-sm-12 col-md-4 '>
            <CardImg className='cardImgServicos' top width="100%" src={img} alt="Card image cap" />
            <CardBody className='cardServBody'>
                <CardTitle>{title}</CardTitle>
                <Button>Button</Button>
            </CardBody>
        </Card>
    );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
    const { title, text, img, id } = el;

    return (
        <MenuItem
            title={title}
            text={text}
            img={img}
            id-id
            key={id}
        />
    );
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

export default class ServicosL extends Component {
    state = {
        selected: 0
    };

    onSelect = key => {
        this.setState({ selected: key });
    };


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(list, selected);

        return (
            <div style={{height: '150px'}}>
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