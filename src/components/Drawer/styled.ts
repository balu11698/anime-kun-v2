import { animated } from "react-spring";
import styled from "styled-components";

export const DrawerWrapperStyled = styled(animated.div)`
  background-color: rgb(128, 128, 128, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

export const DrawerStyled = styled(animated.div)<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  padding: 16px;
  ${(props) => props.isOpen && `width : 100%`};
  @media screen and (min-width: 768px) {
    ${(props) => props.isOpen && `width : 400px`};
  }
`;
