import styled from 'styled-components'
import PropTypes from 'prop-types';
import {baseDeCores as cores, indexBaseCores as indexC} from '../../../../_core/Variable'

import '../../../fonts/fonts.css'

export const H1 = styled.h1`
font-family: "Amatic SC", "Montserrat";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H2 = styled.h2`
font-family: "Amatic SC", "Montserrat";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H3 = styled.h3`
font-family: "Amatic SC", "Montserrat";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H4 = styled.h4`
font-family: "Amatic SC", "Montserrat";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H5 = styled.h5`
font-family: "Amatic SC", "Montserrat";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H6 = styled.h6`
font-family: "Amatic SC", "Montserrat";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;
