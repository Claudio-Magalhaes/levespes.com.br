import styled from 'styled-components'
import PropTypes from 'prop-types';

import {baseDeCores as cores} from '../../../../_core/Variable'

import { H3 } from '../../../../Component/ui/Title'


export {
    Container6,
    Cont6Span,
    Container6Bg,
    Container4Bg
}

const Container6 = styled.div`

    background: rgba(198, 235, 191, 1);
    border-top: 5px solid rgba(73,124,76,0.75);
    border-bottom: 5px solid rgba(73,124,76,0.75);
    height: auto;
    
    h2{
            
        /*
            Layout para celulares e telas MD
        */
        @media (min-width: 768px) and (max-width: 991px) {
        font-size: 1.75rem
        }
    }
    
    .divInfoCont6{
      .rowBtnCont6{
        button{
            /*
                Layout para celulares e telas SM
            */
            @media (max-width: 767px) {
            font-size: 15pt;
            }
                
            /*
                Layout para celulares e telas MD
            */
            @media (min-width: 768px) and (max-width: 991px) {
            font-size: 15pt;
            }
            
            /*
                    Layout para celulares e telas LG
            */
            
            @media (min-width: 992px) {
            font-size: 18pt;
            }
        }
      }
    }
`;

const Cont6Span = styled(H3)`
text-align: center;
color: ${cores.verdeEscuro};
`;

const Container6Bg = styled.div`

margin-top: auto;
margin-bottom: auto;
height: auto;

img{
display: block;
position: relative;
max-height: 100%;
max-width: 100%;
}
`;

const Container4Bg = styled.div`

margin-top: auto;
margin-bottom: auto;
height: auto;

img{
display: block;
position: relative;
max-height: 100%;
width: 100%;
}
`;