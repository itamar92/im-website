import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useState, useContext } from "react";
import Portalpage from "../Login/Portalpage";
import LoginForm from "../Login/LoginForm";
import LOGO from "../../Image/Logo_IM icon.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./navbarStyles";
import LoginControl from "../Login/LoginControl";
import { HashLink } from "react-router-hash-link";
import { ProductsContext } from "../Products/Context/ProductsContext";

const Navbar = ({ user }) => {
  const { cart } = useContext(ProductsContext);
  const [activeNav, setActiveNav] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const location = useLocation();

  let totalItems = cart.length;
  return (
    <nav>
      <ul>
        <HashLink to="/#head" onClick={() => setActiveNav("")}>
          <img src={LOGO} alt="logo" className="nav__logo" />{" "}
        </HashLink>
        <HashLink
          onClick={() => setActiveNav("")}
          className={activeNav === "" ? "active" : "/"}
          to="/#head"
        >
          <li> Home</li>
        </HashLink>

        <HashLink
          to="/#about"
          onClick={() => setActiveNav("/#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          About
        </HashLink>

        <HashLink
          to="/products#products"
          onClick={() => setActiveNav("/products#products")}
          className={activeNav === "/products#products" ? "active" : ""}
        >
          <li> Products</li>
        </HashLink>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          Contact
        </a>
        <button className="nav__btn" onClick={() => setIsOpen(true)}>
          <LoginControl userName={user.name} />
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
