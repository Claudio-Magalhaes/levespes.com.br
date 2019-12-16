import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import './style.css'

const Example = (prop) => {
    return (
        <>
            <Card className='cardServicos col-sm-12 col-md-4 '>
                <CardImg className='cardImgServicos' top width="100%" src={prop.data.img} alt="Card image cap" />
                <CardBody className='cardServBody'>
                    <CardTitle>{prop.data.title}</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </>
    );
};

export default Example;