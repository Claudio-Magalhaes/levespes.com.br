import styled from 'styled-components'
import PropTypes from 'prop-types';

import {
    Card as CardR,
    CardImg as CardImgR
} from 'reactstrap';

export {
    Card,
    CardImg
};

const Card = styled(CardR)`
border-radius: 10px 10px 10px 10px;
margin-bottom: 20px;
white-space: normal !important;
height: 25rem;

/*
    Layout para celulares e telas SM
*/
@media (max-width: 767px) {
max-width: 21rem;
margin-left: 1rem;
margin-right: 1rem;
padding: 0px;

img{
height: 18rem;
max-height: 18rem;
}

}
    
/*
    Layout para celulares e telas MD
*/
@media (min-width: 768px) and (max-width: 991px) {

padding: 0px;
max-width: 13.5rem;
margin: 0.5rem;

h1{
height: 5.5rem;
}

img{
height: 13.5rem;
max-height: 13.5rem;
}
}

/*
        Layout para celulares e telas LG
*/

@media (min-width: 992px) {
padding: 0px;
max-width: 16rem;
margin: 0.5rem;

h1{
height: 5.5rem;
}

img{
height: 16rem;
max-height: 16rem;
}

}
`;

const CardImg = styled(CardImgR)`
pointer-events: none
`;
