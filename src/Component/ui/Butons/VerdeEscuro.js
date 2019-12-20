import React from 'react';
import propTypes from 'prop-types';

import { VerdeEscuro as BtnVerdeEscuro} from '../../../assets/css/Component/Butons/VerdeEscuro'

import {baseDeCores as cores} from '../../../_core/Variable'

const checkHover = (cor) => {
    return cores[cor];
};

const VerdeEscuro = (prop) => {
    return (
        <>
            <BtnVerdeEscuro hover={checkHover(prop.hover)} outline={true}>{prop.children}</BtnVerdeEscuro>
        </>
    );
};

VerdeEscuro.propTypes = {
    hover : propTypes.oneOf(['Branco','gelo','verdeAmarelado','verdeClaro','verdeEscuro'])
};

VerdeEscuro.defaultProps = {
    hover : 'verdeAmarelado'
};

export {
    VerdeEscuro
}





