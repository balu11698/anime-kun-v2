import React from "react";

export interface ModalProps {
  children: any;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
