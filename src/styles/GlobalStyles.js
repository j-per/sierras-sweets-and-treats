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
    }
    h2 {
        font-size: 48px;
    }
    p {
        font-size: 20px;
    }
    .ignorewidth {
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    position: relative;
  }

`;

export default GlobalStyles;
