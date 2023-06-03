import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
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
`;

export default GlobalStyle;
