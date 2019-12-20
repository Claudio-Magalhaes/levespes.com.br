import React from 'react';
import {
    CardImg, CardText, CardBody, CardSubtitle, Button
} from 'reactstrap';

import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import {
    Card
} from '../../../assets/css/Component/Card/CardServicos';

import {baseDeCores as cores} from '../../../_core/Variable'

import {
    VerdeEscuro as BtnVerdeEscuro
} from '../../../Component/ui/Butons/VerdeEscuro'

import {
    H2,
    H4
} from '../Title'

const CardServicos = (prop) => {
    return (
        <>
            <Card>
                <CardImg className='cardImgServicos' top width="100%" src={prop.data.img} alt="Card image cap" />
                <CardBody>
                    <H2
                        fontSize='3.5rem'
                    >
                        {prop.data.title}
                    </H2>
                    <CardSubtitle>
                        <H4
                            color={cores.verdeAmarelado}
                            fontBold={true}
                        >{prop.data.duracao} <AccessAlarmIcon/></H4>
                    </CardSubtitle>
                    <CardText>{prop.data.text}</CardText>
                    <BtnVerdeEscuro className='mt-auto' hover='verdeAmarelado'> Ver Tratamento </BtnVerdeEscuro>
                </CardBody>
            </Card>
        </>
    );
};

export default CardServicos;