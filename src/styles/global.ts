import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-size: 1rem;
    font-family: 'Noto Sans', sans-serif;
  }

  a, a:hover {
    text-decoration: none;
    color: inherit
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body.no-scrollbar::-webkit-scrollbar {
    display: none;
  }

`;

export default GlobalStyle;
