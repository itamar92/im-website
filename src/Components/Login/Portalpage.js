import React, {useContext} from "react";
import "./login.css";
import ReactDom from "react-dom";
import CloseIcon from "@mui/icons-material/Close";
import {UserContext} from "../../Context/UserContext"

function Portalpage({ open, children, onClose }) {

  const {isLoggedIn} = useContext(UserContext)
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="overlay">
        <div className="portal">
          
         {!isLoggedIn && <button className="portal__btn" onClick={onClose}>
            <CloseIcon />
          </button>}
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Portalpage;
