import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --brown: #3D272A;
        --lightBlue: #25C2B9;
        --darkerBlue: #127B75;
        --white: #FFFFFF;
        --pink: #FDE6F0;
    }
    p, a {
        color: var(--brown);
    }
    h1,h2,h3,h4,h5 {
        color: var(--brown);
        font-size: 
    }
    h2 {
        font-size: 48px;
    }

`;

export default GlobalStyles;
