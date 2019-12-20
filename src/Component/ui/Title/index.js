import styled from 'styled-components'
import PropTypes from 'prop-types';
import {baseDeCores as cores} from '../../../_core/Variable'

import '../../../assets/fonts/fonts.css'

export const H1 = styled.h1`
font-family: "Tall Abbey Sans Regular";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H2 = styled.h2`
font-family: "Tall Abbey Sans Regular";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H3 = styled.h3`
font-family: "Tall Abbey Sans Regular";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H4 = styled.h4`
font-family: "Tall Abbey Sans Regular";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H5 = styled.h5`
font-family: "Tall Abbey Sans Regular";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;

export const H6 = styled.h6`
font-family: "Tall Abbey Sans Regular";
color: ${props => props.color};
${props => (props.fontSize === null) ? '' : `font-size: ${props.fontSize};`};
text-align: ${props => props.textAlign};
${props => (props.fontBold) ? 'font-weight: bold;': ''}
`;


H1.propTypes = {
    fontSize : PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontBold : PropTypes.boolean
};

H1.defaultProps = {
    fontSize : null,
    color: cores.verdeEscuro,
    textAlign: 'center',
    fontBold: false
};

H2.propTypes = {
    fontSize : PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontBold : PropTypes.boolean
};

H2.defaultProps = {
    fontSize : null,
    color: cores.verdeEscuro,
    textAlign: 'center',
    fontBold: false
};

H3.propTypes = {
    fontSize : PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontBold : PropTypes.boolean
};

H3.defaultProps = {
    fontSize : null,
    color: cores.verdeEscuro,
    textAlign: 'center',
    fontBold: false
};

H4.propTypes = {
    fontSize : PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontBold : PropTypes.boolean
};

H4.defaultProps = {
    fontSize : null,
    color: cores.verdeEscuro,
    textAlign: 'center',
    fontBold: false
};

H5.propTypes = {
    fontSize : PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontBold : PropTypes.boolean
};

H5.defaultProps = {
    fontSize : null,
    color: cores.verdeEscuro,
    textAlign: 'center',
    fontBold: false
};

H6.propTypes = {
    fontSize : PropTypes.string,
    color: PropTypes.string,
    textAlign: PropTypes.string,
    fontBold : PropTypes.boolean
};

H6.defaultProps = {
    fontSize : null,
    color: cores.verdeEscuro,
    textAlign: 'center',
    fontBold: false
};
