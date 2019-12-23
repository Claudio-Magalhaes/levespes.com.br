import React from 'react';
import PropTypes from 'prop-types';

import { VerdeEscuro as BtnVerdeEscuro} from '../../../assets/css/Component/Butons/VerdeEscuro'

import {baseDeCores as cores} from '../../../_core/Variable'
import {H1 as H1Css} from "../../../assets/css/Component/Title";

const checkHover = (cor) => {
    return cores[cor];
};

const VerdeEscuro = (prop) => {
    return (
        <>
            <BtnVerdeEscuro
                className={prop.className}
                style={prop.style}
                key={prop.key}
                id={prop.id}
                hover={checkHover(prop.hover)}
                outline={true}
            >
                {prop.children}
            </BtnVerdeEscuro>
        </>
    );
};

VerdeEscuro.propTypes = {
    hover : PropTypes.oneOf(['Branco','gelo','verdeAmarelado','verdeClaro','verdeEscuro']),
    className: PropTypes.string,
    style: PropTypes.object,
    key: PropTypes.string,
    id: PropTypes.object
};

VerdeEscuro.defaultProps = {
    hover : 'verdeAmarelado',
    style: null,
    className: null,
    key: null,
    id: null
};

export {
    VerdeEscuro
}





