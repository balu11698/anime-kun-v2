import { animated } from "react-spring";
import styled from "styled-components";

export const HeaderWrapperStyled = styled.div`
  position: sticky;
  top: 0;
  background-color: red;
`;

export const HeaderStyled = styled.div`
  display: flex;
  height: 64px;
`;

export const NavBarWrapper = styled(animated.div)`
  background-color: grey;
  position: fixed;
  top: 64px;
  left: 0;
  height: 100vh;
  overflow: hidden;
`;
