import React from 'react';
import {
    CardBody
} from 'reactstrap';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import {
    CardImg,
    Card,
    BtnCard
} from '../../../assets/css/Component/Card/CardProdutos';

import {
    H1
} from '../Title'

const CardProdutos = (prop) => {
    return (
        <Card>
            <CardImg className='cardImgServicos' top width="100%" src={prop.data.img} alt="Card image cap" {...prop.props} />
            <CardBody>
                <H1
                    fontBold={true}
                >
                    {prop.data.title}
                </H1>
            </CardBody>
        </Card>
    );
};

export default CardProdutos;