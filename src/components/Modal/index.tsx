import useOutsideClick from "../../hooks/useOutsideClick";
import { config, useTransition } from "react-spring";
import { ModalProps } from "./interface";
import { ModalWrapperStyled, ModalStyled } from "./style";

const Modal = (props: ModalProps) => {
  const { children, visible, setVisible } = props;

  const { ref } = useOutsideClick({ setShow: setVisible });

  const transition = useTransition(visible, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: config.stiff,
  });

  return transition((style, isOpen) => (
    <>
      {isOpen ? <ModalWrapperStyled style={style} /> : null}
      {isOpen ? (
        <ModalStyled style={style} ref={ref}>
          {children}
        </ModalStyled>
      ) : null}
    </>
  ));
};

export default Modal;
