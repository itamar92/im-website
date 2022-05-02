import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import Login from "../Login/Login";
import Portalpage from "../Login/Portalpage";
import LoginForm from "../Login/LoginForm";
import LOGO from "../../Image/Logo_IM icon.png";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./navbarStyles";
import LoginControl from "../Login/LoginControl";

const Navbar = ({ totalItems, items }) => {
  const [activeNav, setActiveNav] = useState("/");
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const location = useLocation();
  return (
    <nav>
      <ul>
        <Link to="/">
          <img src={LOGO} alt="logo" className="nav__logo" />{" "}
        </Link>
        <Link
          onClick={() => setActiveNav("")}
          className={activeNav === "" ? "active" : "/"}
          to="/"
        >
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
          onClick={() => setActiveNav("/products")}
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
          <LoginControl userName={items.name} />
        </button>
        <Portalpage open={isOpen} onClose={() => setIsOpen(false)}>
          {<LoginForm setIsOpen={setIsOpen} />}
        </Portalpage>
        <div className={classes.grow} />
        {location.pathname !== "/cart" && (
          <div className="cart">
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
