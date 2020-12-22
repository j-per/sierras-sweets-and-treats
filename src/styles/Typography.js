import { createGlobalStyle } from 'styled-components';

import fontRegular from '../assets/fonts/SourceSansPro-Regular.ttf';
import fontBold from '../assets/fonts/SourceSansPro-Bold.ttf';

const Typography = createGlobalStyle`
    @font-face {
        font-family: SourceSansPro;
        src: url(${fontRegular});
    }
    html {
        font-family: SourceSansPro;
        color: var(--brown);
    }
    h1,h2,h3,h4,h5,h6 {
        font-weight: bold;
        margin: 0;
    }
    a {
        text-decoration-color: var(--brown);
        text-decoration: none;
    }
`;

export default Typography;
