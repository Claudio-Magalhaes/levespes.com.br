import { createGlobalStyle } from 'styled-components';

import {baseDeCores as cores } from '../../../_core/Variable'

import TallAbbeySansRgOtf from './TallAbbeySansRg.otf';
import TallAbbeySansRgTtf from './TallAbbeySansRg.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Tall Abbey Sans Regular';
        src(${TallAbbeySansRgOtf}),
        src(${TallAbbeySansRgTtf});
        font-style: normal;
    }
    
    body{
    
    // CORES PSDRÕES DO SITE
    
    --Branco: ${cores.Branco};
    --gelo: ${cores.gelo};
    --verdeAmarelado: ${cores.verdeAmarelado};
    --verdeClaro: ${cores.verdeClaro};
    --verdeEscuro: ${cores.verdeEscuro};
    //-----------------------
    
    // FONT DA LOGO
    
    --fontLogo: 'Tall Abbey Sans Regular';
    //-----------------------
    }
`;
