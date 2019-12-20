import styled from 'styled-components'
import PropTypes from 'prop-types';

import { Button } from 'reactstrap'


import {baseDeCores as cores} from '../../../../_core/Variable'

export {
    VerdeEscuro
};


const VerdeEscuro = styled(Button)`
color: ${cores.verdeEscuro};
border-color: ${cores.verdeEscuro};

:hover{
color: white;
background: ${props => props.hover};
border-color: ${props => props.hover};
}
`;

// Butons.propTypes = {
//
// };
//
// Butons.defaultProps = {
//
// };