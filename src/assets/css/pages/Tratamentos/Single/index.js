import styled from 'styled-components'
import PropTypes from 'prop-types';
import PopoverHeaderR from "reactstrap/es/PopoverHeader";
import PopoverBodyR from "reactstrap/es/PopoverBody";
import { Row } from 'reactstrap';

export {
    Img,
    PopoverHeader,
    PopoverBody,
    Valor
}


const Img = styled.img`
width: 100%;
max-height: 400px;
//background-color: #4A8250;
`;

const PopoverHeader = styled(PopoverHeaderR)`
background-color: rgba(141,230,150,0.09);
`;

const PopoverBody = styled(PopoverBodyR)`
background-color: rgba(149,255,156,0.02);
`;

const Valor = styled(Row)`
position: absolute;
width: 95%;
height: 20%;
bottom: 0;
margin-bottom: 5px;

@media (max-width: 540px) {
position: relative;
height: auto;
}
`;