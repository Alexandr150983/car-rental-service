import React, { useEffect } from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Backdrop,
} from "./Modal.styled";
import { ReactComponent as IconClose } from "../../assets/close.svg";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; 
      document.addEventListener("keydown", handleEscapeKeyPress);
    }

    return () => {
      document.body.style.overflow = "auto"; 
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, onClose]); 

  if (!isOpen) return null;
  return (
    <Backdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton type="button" onClick={onClose}>
          <IconClose />
        </CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
