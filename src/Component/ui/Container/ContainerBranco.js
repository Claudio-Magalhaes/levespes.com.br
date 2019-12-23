import styled from 'styled-components'

import {Container} from "@material-ui/core";

export {
    ContainerBranco
};



const ContainerBranco = styled(Container)`
margin-top: 2em;
margin-bottom: 2em;
padding: 1.5rem;

margin-left: auto;

h1{
min-width: 100%;
font-weight: 600;
line-height: 1.3em;
margin-top: 0.6667em;
margin-bottom: 0.4em;
letter-spacing: 0.25rem;
}

p{
font-family: "Source Sans Pro";
font-size: 18px;
font-weight: 400;
line-height: 1.62em;
}
`;
