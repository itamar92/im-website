import React from "react";
import "./login.css";
import ReactDom from "react-dom";

function Portalpage({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="portal">
          <button className="nav__btn" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Portalpage;
