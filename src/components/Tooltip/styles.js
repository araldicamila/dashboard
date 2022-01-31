import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerTooltip = styled.div`
  position: absolute;
  padding: 0.75rem;
  background-color: ${colors.pinkMedium};
  bottom: -80px;
  border-radius: 1.25rem;
  right: -45px;

  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  text-align: right;

  min-width: 100px;

  &::after {
    content: " ";
    position: absolute;
    top: -10px;
    left: 35px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent ${colors.pinkMedium} transparent;
  }

  button {
    width: 100% !important;
    justify-content: flex-start !important;

    color: #fff;
    font-weight: bold;
    font-size: 1rem;
  }
`;
