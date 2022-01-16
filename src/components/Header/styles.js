import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerHeader = styled.header`
  background-color: ${colors.white};
  width: calc(100% - 3.12rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.56rem 1.87rem;
  color: ${colors.purple};

  position: absolute;
  top: 0;

  margin-left: 3.12rem;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 11px;
    }
  }

  p {
    margin: 0;
    font-family: "Roboto Slab", serif;
    font-weight: 600;
    font-size: 1.87rem;
  }

  time {
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;
