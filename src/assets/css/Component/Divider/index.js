import styled from 'styled-components'
import PropTypes from 'prop-types';

import svgDivider from '../../../image/SVG/Divider.svg'

import { Row } from 'reactstrap'

export {
    DividerCss
}

const DividerCss = styled(Row)`
background-image: url("${svgDivider}");
height: 50px;
margin-top: 25px;
margin-bottom: 25px;
max-width: 99%;

/*
    Layout para celulares e telas SM
*/
@media (max-width: 767px) {
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
}
`;