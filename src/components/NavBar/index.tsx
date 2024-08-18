import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTransition, config } from "react-spring";
import { HeaderStyled, HeaderWrapperStyled, NavBarWrapper } from "./style";
import useOutsideClick from "../../hooks/useOutsideClick";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const { ref } = useOutsideClick({ setShow });

  const transition = useTransition(show, {
    from: {
      opacity: 0,
      width: "0px",
    },
    enter: {
      opacity: 1,
      width: "200px",
    },
    leave: {
      opacity: 0,
      width: "0px",
    },
    config: config.default,
  });

  const onNavShow = () => {
    setShow(true);
  };

  return (
    <HeaderWrapperStyled ref={ref}>
      <HeaderStyled>
        <div onClick={onNavShow}>NavBar</div>
        <div>Anime Kun</div>
      </HeaderStyled>
      {transition((style, isOpen) =>
        isOpen ? (
          <NavBarWrapper style={style}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/top">TOp</NavLink>
          </NavBarWrapper>
        ) : null
      )}
    </HeaderWrapperStyled>
  );
};
export default NavBar;
