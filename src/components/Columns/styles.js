import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

const setThemes = (theme) => {
  switch (theme) {
    case "green":
      return {
        color: colors.green,
      };
    case "yellow":
      return {
        color: colors.yellow,
      };
    default:
      return {
        color: colors.pinkMedium,
      };
  }
};

export const ContainerColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  max-width: 24rem;

  min-height: calc(100vh - 6rem);

  .header-columns {
    display: flex;
    justify-content: center;
    align-items: center;

    column-gap: 1.5rem;

    height: 1.62rem;

    img {
      width: 24px;
    }

    p {
      font-weight: bold;
      font-size: 1.12rem;
      color: ${({ theme }) => setThemes(theme).color};
    }
  }

  button {
    width: 1.87rem;
    height: 1.87rem;

    border-radius: 50px;
    border: none;
    background-color: ${({ theme }) => setThemes(theme).color};
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    position: relative;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.87rem;

  margin-top: 2rem;
`;
