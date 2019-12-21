import styled from 'styled-components'
import PropTypes from 'prop-types';

import {
    Card as CardR,
    CardImg as CardImgR,
    CardText as CardTextR,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

export {
    Card,
    CardImg,
    BtnCard,
    CardTitle,
    CardSubtitle,
    Button
};


const Card = styled(CardR)`
border-radius: 10px 10px 10px 10px;
margin-bottom: 20px;
white-space: normal !important;
height: 20rem;

/*
    Layout para celulares e telas SM
*/
@media (max-width: 767px) {
max-width: 18rem;
margin-left: auto;
margin-right: auto;
padding: 0px;

img{
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
max-height: 13rem;
}

}
`;

const CardImg = styled(CardImgR)`
pointer-events: none
`;

const BtnCard = styled.div`
display: flex;
justify-content: center;
`;