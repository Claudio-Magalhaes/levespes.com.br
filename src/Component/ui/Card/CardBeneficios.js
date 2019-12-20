import styled from 'styled-components'
import PropTypes from 'prop-types';

export {
    CardBeneficios
};


const CardBeneficios = styled.div`

  .imgCardContainer3 {
    border-radius: 100%;
    min-height: 8rem;
    width: 8rem;
    // background-image: url("${props => (props.bg === null) ? '' : props.bg}");
    ${props => (props.bg === null) ? 'background: #83ca86;' : 'background-image: url("${props.bg}");'}

    ;
  }
`;

CardBeneficios.propTypes = {
    bg: PropTypes.string,
};

CardBeneficios.defaultProps = {
    bg: null
};

