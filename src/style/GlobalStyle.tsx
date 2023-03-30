import { css, Global } from '@emotion/react';

const globalStyleCss = css`
  * {
    box-sizing: border-box;
  }
  html {
    height: 100%;
  }

  a {
    text-decoration: none;
  }
  li,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  p {
    margin: 0;
  }

  input {
    font-size: 16px;

    appearance: none;
    border: none;
    outline: none;
  }

  #root {
    height: 100%;
  }

  body {
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const GlobalStyle = () => <Global styles={globalStyleCss} />;

export default GlobalStyle;
