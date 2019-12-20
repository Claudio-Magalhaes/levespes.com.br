import { createGlobalStyle } from 'styled-components';

import TallAbbeySansRgOtf from './TallAbbeySansRg.otf';
import TallAbbeySansRgTtf from './TallAbbeySansRg.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Tall Abbey Sans Regular';
        src(${TallAbbeySansRgOtf}),
        src(${TallAbbeySansRgTtf});
        font-style: normal;
    }
`;
