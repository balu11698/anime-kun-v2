import { config, useTransition } from "react-spring";
import useOutsideClick from "../../hooks/useOutsideClick";
import { DrawerStyled, DrawerWrapperStyled } from "./styled";

import { DrawerProps } from "./interface";

const Drawer = (props: DrawerProps) => {
  const { children, visible, setVisible } = props;

  const { ref } = useOutsideClick({ setShow: setVisible });

  const transitionBackgroud = useTransition(visible, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: config.default,
  });

  const transition = useTransition(visible, {
    from: {
      opacity: 0,
      transform: `translateX(100px)`,
    },
    enter: {
      opacity: 1,
      transform: `translateX(0px)`,
    },
    leave: {
      opacity: 0,
      transform: `translateX(100px)`,
    },
    config: config.default,
  });

  return (
    <>
      {transitionBackgroud((style, isOpen) =>
        isOpen ? <DrawerWrapperStyled style={style} /> : null
      )}
      {transition((style, isOpen) => (
        <>
          {isOpen ? (
            <DrawerStyled isOpen={isOpen} ref={ref} style={style}>
              <div
                onClick={() => {
                  setVisible(false);
                }}
              >
                back
              </div>
              {children}
            </DrawerStyled>
          ) : null}
        </>
      ))}
    </>
  );
};

export default Drawer;
