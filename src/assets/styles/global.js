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

  main {
    margin-left: 50px;
    margin-top: 56.91px;

    width: calc(100% - 50px);
    height: calc(100vh - 56.91px);

    padding: 1.87rem;
  }

  .main-tasks {
    display: flex;

    column-gap: 2.31rem;
    overflow-x: auto;
  }
`;
