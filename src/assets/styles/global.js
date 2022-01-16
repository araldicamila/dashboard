import { createGlobalStyle } from "styled-components";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.pink};
  }

  p, button, b, input {
    font-family: 'Roboto', sans-serif;
  }
`;
