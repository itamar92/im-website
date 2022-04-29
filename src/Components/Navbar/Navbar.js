import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import Login from "../Login/Login";
import Portalpage from "../Login/Portalpage";
import LoginForm from "../Login/LoginForm";
import LOGO from "../../Image/Logo_IM_1.png";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      {/* <img src={""} alt="logo" height="10px" className="nav__logo" />{" "} */}
      <h3 className="nav__logo">Logo</h3>
      <ul>
        <Link className={activeNav === "" ? "active" : "/"} to="/">
          <li> Home</li>
        </Link>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          About
        </a>
        <Link
          className={activeNav === "/products" ? "active" : ""}
          to="/products"
        >
          <li> Products</li>
        </Link>

        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          Contact
        </a>
        <button className="nav__btn" onClick={() => setIsOpen(true)}>
          Login
        </button>
        <Portalpage open={isOpen} onClose={() => setIsOpen(false)}>
          {<LoginForm setIsOpen={setIsOpen} />}
        </Portalpage>
      </ul>
    </nav>
  );
};

export default Navbar;
