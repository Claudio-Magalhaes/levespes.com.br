import styled from 'styled-components'
import PropTypes from 'prop-types';

export {
    CardBeneficios
};


const CardBeneficios = styled.div`

  .CircImgCardContainer3{
    border-radius: 100%;
    min-height: 8rem;
    width: 8rem;
    background: #83ca86;
  }

  .imgCardContainer3 {
    border-radius: 100%;
    min-height: 8rem;
    width: 8rem;
    background-image: url("${props => props.bg}");
    background-repeat: no-repeat;
    background-size: cover;
    
  }
`;

CardBeneficios.propTypes = {
    bg: PropTypes.string,
};

CardBeneficios.defaultProps = {
    bg: null
};

