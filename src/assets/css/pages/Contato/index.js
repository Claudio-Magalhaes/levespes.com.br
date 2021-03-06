import styled from 'styled-components'
import PropTypes from 'prop-types';
import ListItemText from "@material-ui/core/ListItemText";

import {baseDeCores as cores} from '../../../../_core/Variable'

export {
    DivMap,
    DivMainContato,
    DivEmail,
    Contatos
}


const DivMainContato = styled.div`
margin-top: 100px;
`;

const DivMap = styled.div`
background-image: url("${props => props.background}");
background-size: contain;
background-position: center;
background-repeat: no-repeat;
height: 400px;
//background: #656565;
`;

const DivEmail = styled.div`
margin-top: 25px;
`;

const Contatos = styled(ListItemText)`
color: ${cores.verdeEscuro} !important;
`;