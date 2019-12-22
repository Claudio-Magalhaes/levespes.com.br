import styled from 'styled-components'
import PropTypes from 'prop-types';

import {baseDeCores as cores} from '../../../../_core/Variable'

import { H3 } from '../../../../Component/ui/Title'


export {
    Container6,
    Cont6Span
}

const Container6 = styled.div`

    background: rgba(198, 235, 191, 1);
    border-top: 5px solid rgba(73,124,76,0.75);
    border-bottom: 5px solid rgba(73,124,76,0.75);
    min-height: 500px;
`;

const Cont6Span = styled(H3)`
text-align: left;
color: white;
`;