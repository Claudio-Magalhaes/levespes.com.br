import React from "react";
import PropTypes from 'prop-types';

import {
    H1 as H1Css,
    H2 as H2Css,
    H3 as H3Css,
    H4 as H4Css,
    H5 as H5Css,
    H6 as H6Css
} from '../../../assets/css/Component/Title'
import {baseDeCores as cores} from "../../../_core/Variable";

export {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
}

let prop = '';

const SelectColor = (cod) => {

    return cores[cod]

};

const H1 = (props) => {

    prop = props;

    return (
        <H1Css
            className={props.className}
            style={props.style}
            key={props.key}
            id={props.id}
            fontSize={props.fontSize}
            color={SelectColor(props.color)}
            textAlign={props.textAlign}
            fontBold={props.fontBold}
        >{props.children}</H1Css>
    )

};

const H2 = (props) => {

    prop = props;

    return (
        <H2Css
            className={props.className}
            style={props.style}
            key={props.key}
            id={props.id}
            fontSize={props.fontSize}
            color={SelectColor(props.color)}
            textAlign={props.textAlign}
            fontBold={props.fontBold}
        >{props.children}</H2Css>
    )

};

const H3 = (props) => {

    prop = props;

    return (
        <H3Css
            className={props.className}
            style={props.style}
            key={props.key}
            id={props.id}
            fontSize={props.fontSize}
            color={SelectColor(props.color)}
            textAlign={props.textAlign}
            fontBold={props.fontBold}
        >{props.children}</H3Css>
    )

};

const H4 = (props) => {

    prop = props;

        return (
        <H4Css
            className={props.className}
            style={props.style}
            key={props.key}
            id={props.id}
            fontSize={props.fontSize}
            color={SelectColor(props.color)}
            textAlign={props.textAlign}
            fontBold={props.fontBold}
        >{props.children}</H4Css>
    )

};

const H5 = (props) => {

    prop = props;

        return (
        <H5Css
            className={props.className}
            style={props.style}
            key={props.key}
            id={props.id}
            fontSize={props.fontSize}
            color={SelectColor(props.color)}
            textAlign={props.textAlign}
            fontBold={props.fontBold}
        >{props.children}</H5Css>
    )

};

const H6 = (props) => {

    prop = props;

        return (
        <H6Css
            className={props.className}
            style={props.style}
            key={props.key}
            id={props.id}
            fontSize={props.fontSize}
            color={SelectColor(props.color)}
            textAlign={props.textAlign}
            fontBold={props.fontBold}
        >{props.children}</H6Css>
    )

};

//=========================================
//=========================================


H1.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    key: PropTypes.string,
    id: PropTypes.object,
    fontSize : PropTypes.string,
    color: PropTypes.oneOf([
        'Branco',
        'gelo',
        'verdeAmarelado',
        'verdeClaro',
        'verdeEscuro'
    ]),
    textAlign: PropTypes.string,
    fontBold : PropTypes.bool
};

H1.defaultProps = {
    fontSize : null,
    color: 'verdeEscuro',
    textAlign: 'center',
    fontBold: false,
    className: null,
    key: null,
    id: null
};

H2.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    key: PropTypes.string,
    id: PropTypes.object,
    fontSize : PropTypes.string,
    color: PropTypes.oneOf([
        'Branco',
        'gelo',
        'verdeAmarelado',
        'verdeClaro',
        'verdeEscuro'
    ]),
    textAlign: PropTypes.string,
    fontBold : PropTypes.bool
};

H2.defaultProps = {
    fontSize : null,
    color: 'verdeEscuro',
    textAlign: 'center',
    fontBold: false,
    className: null,
    key: null,
    id: null
};

H3.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    key: PropTypes.string,
    id: PropTypes.object,
    fontSize : PropTypes.string,
    color: PropTypes.oneOf([
        'Branco',
        'gelo',
        'verdeAmarelado',
        'verdeClaro',
        'verdeEscuro'
    ]),
    textAlign: PropTypes.string,
    fontBold : PropTypes.bool
};

H3.defaultProps = {
    fontSize : null,
    color: 'verdeEscuro',
    textAlign: 'center',
    fontBold: false,
    className: null,
    key: null,
    id: null
};

H4.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    key: PropTypes.string,
    id: PropTypes.object,
    fontSize : PropTypes.string,
    color: PropTypes.oneOf([
        'Branco',
        'gelo',
        'verdeAmarelado',
        'verdeClaro',
        'verdeEscuro'
    ]),
    textAlign: PropTypes.string,
    fontBold : PropTypes.bool
};

H4.defaultProps = {
    fontSize : null,
    color: 'verdeEscuro',
    textAlign: 'center',
    fontBold: false,
    className: null,
    key: null,
    id: null
};

H5.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    key: PropTypes.string,
    id: PropTypes.object,
    fontSize : PropTypes.string,
    color: PropTypes.oneOf([
        'Branco',
        'gelo',
        'verdeAmarelado',
        'verdeClaro',
        'verdeEscuro'
    ]),
    textAlign: PropTypes.string,
    fontBold : PropTypes.bool
};

H5.defaultProps = {
    fontSize : null,
    color: 'verdeEscuro',
    textAlign: 'center',
    fontBold: false,
    className: null,
    key: null,
    id: null
};

H6.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    key: PropTypes.string,
    id: PropTypes.object,
    fontSize : PropTypes.string,
    color: PropTypes.oneOf([
        'Branco',
        'gelo',
        'verdeAmarelado',
        'verdeClaro',
        'verdeEscuro'
    ]),
    textAlign: PropTypes.string,
    fontBold : PropTypes.bool
};

H6.defaultProps = {
    fontSize : null,
    color: 'verdeEscuro',
    textAlign: 'center',
    fontBold: false,
    className: null,
    key: null,
    id: null
};