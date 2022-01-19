import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerTasksCards = styled.div`
  background-color: #fff;
  padding: 0.62rem;
  border-radius: 0.62rem;
  width: 23.12rem;
  height: 7.43rem;

  font-size: 0.75rem;
  color: ${colors.black};

  h4 {
    font-weight: bold;

    margin-bottom: 0.62rem;
  }

  p {
    line-height: 0.87rem;
    text-align: justify;
  }

  time {
    font-weight: bold;
  }
`;

export const ContainerAvatar = styled.div`
  width: 24px;
  height: 24px;

  background-color: ${colors.black};
  color: ${colors.white};
  border-radius: 50px;

  margin-right: 1.2rem;
`;

export const FooterCards = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;
