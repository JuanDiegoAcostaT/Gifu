import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="btn4" onClick={onClose}>
          ❌
        </button>
        <p>Please get login for adding favorites gifs to list.</p>
        {children}
      </div>
    </div>
  );
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById("portal"))
}
