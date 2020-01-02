import React from 'react';
import {
    CardBody, Button
} from 'reactstrap';

import {stringTrunc} from "../../../_core/Functions/stringTrunc";

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import {
    CardImg,
    CardText,
    Card,
    BtnCard,
    CardSubtitle
} from '../../../assets/css/Component/Card/CardServicos';

import {baseDeCores as cores} from '../../../_core/Variable'

import {
    VerdeEscuro as BtnVerdeEscuro
} from '../../../Component/ui/Butons/VerdeEscuro'

import {
    H1,
    H4
} from '../Title'

function click(id){
alert(id);
}

const CardServicos = (prop) => {
    return (
        <Card key={'tratamentos-'+prop.data.id}>
            <CardImg className='cardImgServicos' top width="100%" src={prop.data.img} alt="Card image cap" {...prop.props} />
            <CardBody>
                <H1
                    fontBold={true}
                    fontSize={'200%'}
                >
                    {prop.data.title}
                </H1>
                <CardSubtitle>
                    <H4
                        color='verdeAmarelado'
                        fontBold={true}
                        fontSize={'18pt'}
                    >
                        {prop.data.duracao} <AccessAlarmIcon/>
                    </H4>
                </CardSubtitle>
                <CardText>{stringTrunc(prop.data.text, '40')}</CardText>
                <BtnCard>
                    <a href={'/Tratamentos/'+prop.data.id}>
                        <BtnVerdeEscuro hover='verdeAmarelado'> Ver Tratamento </BtnVerdeEscuro>
                    </a>
                </BtnCard>
            </CardBody>
        </Card>
    );
};

export default CardServicos;