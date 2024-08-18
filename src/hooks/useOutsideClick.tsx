import { useEffect, useRef } from "react";
import { OutsideClickProps } from "./interface";

const useOutsideClick = (props: OutsideClickProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setShow } = props;

  const navClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", navClick, true);
    return () => {
      document.removeEventListener("click", navClick, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref };
};

export default useOutsideClick;
