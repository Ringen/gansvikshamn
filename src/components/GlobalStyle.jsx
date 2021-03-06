import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: "Avenir";
        font-weight: 400;
        font-style: normal;
        src: url("/avenir-400.woff2") format("woff2");
        font-display: swap;
    }

    body {
        font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
        font-size: 1em;
        line-height: 1.65;
        color: #373F49;
        background: #eee;
        margin: 0;
    }

    img {
        display: block;
        width: 100%;
    }

    h1,
    h2,
    h3 {
        font-size: 2em;
        font-weight: normal;
    }

    a {
        color: currentColor;
    }
`;

export default GlobalStyle;
