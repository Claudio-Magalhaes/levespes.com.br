import React from 'react';
import {
    CardBody, CardSubtitle, Button
} from 'reactstrap';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import {
    CardImg,
    CardText,
    Card,
    BtnCard
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
        <Card>
            <CardImg className='cardImgServicos' top width="100%" src={prop.data.img} alt="Card image cap" {...prop.props} />
            <CardBody>
                <H1
                    fontBold={true}
                >
                    {prop.data.title}
                </H1>
                <CardSubtitle>
                    <H4
                        color={cores.verdeAmarelado}
                        fontBold={true}
                    >{prop.data.duracao} <AccessAlarmIcon/></H4>
                </CardSubtitle>
                <CardText cssModule={{backgroundColor : 'red'}} >{prop.data.text}</CardText>
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