import { animated } from "react-spring";
import styled from "styled-components";

export const ModalWrapperStyled = styled(animated.div)`
  background-color: rgb(128, 128, 128, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

export const ModalStyled = styled(animated.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 30vh;
  background-color: white;
`;
