import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const BackgroundModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;

  background-color: rgba(4, 18, 88, 0.4);
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background-color: ${colors.pink};

  padding: 2.43rem 1.62rem;
  border-radius: 1.87rem;
  min-width: 27.31rem;
`;
