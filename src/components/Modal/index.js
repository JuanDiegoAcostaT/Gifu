import React from "react";
import ReactDOM from "react-dom";
import { ModalButton, ModalComponent, ModalContent } from './styles'

function Modal({ children, onClose }) {
  return (
    <ModalComponent>
      <ModalContent>
        <ModalButton onClick={onClose}>
          ❌
        </ModalButton>
        <p>Please get login for adding favorites gifs to list.</p>
        {children}
      </ModalContent>
    </ModalComponent>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById("portal"))
}
