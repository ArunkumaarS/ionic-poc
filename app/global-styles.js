import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-family: SANS-SERIF;
  }

  body.fontLoaded {
    font-family: SANS-SERIF;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    font-family: SANS-SERIF;
    user-select: none;
  }

  p,
  label {
    font-family: SANS-SERIF;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
