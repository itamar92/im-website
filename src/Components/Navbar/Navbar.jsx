import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useState, useContext, useEffect } from "react";
import Portalpage from "../Login/Portalpage";
import LoginForm from "../Login/LoginForm";
import LOGO from "../../assents/Logo_IM icon.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./navbarStyles";
import LoginControl from "../Login/LoginControl";
import { HashLink } from "react-router-hash-link";
import { ProductsContext } from "../Products/Context/ProductsContext";
import { UserContext } from "../Login/UserContext";
import CartDropDown from "../Cart/CartDropDown";
import SearchBar from "./SearchBar";

const Navbar = () => {
  // const { totalCart } = useContext(ProductsContext);
  const { cart } = useContext(ProductsContext);
  const { products } = useContext(ProductsContext);
  const { isAdmin } = useContext(UserContext);
  const [activeNav, setActiveNav] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [cartIsHidden, setCartIsHidden] = useState(true);
  const [totalCart, setTotalCart] = useState();
  const classes = useStyles();
  const location = useLocation();

  const toggleHidden = () => setCartIsHidden(!cartIsHidden);

  const getTotalCart = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    console.log("Total Cart", total);
    setTotalCart(total);
  };

  useEffect(() => {
    getTotalCart();
  }, [cart]);

  return (
    <nav>
      <ul>
        <HashLink to="/#head" onClick={() => setActiveNav("")}>
          <img src={LOGO} alt="logo" className="nav__logo" />{" "}
        </HashLink>
        <SearchBar data={products} />
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
          className={activeNav === "/#about" ? "active" : ""}
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

        <HashLink
          to="/#contact"
          onClick={() => setActiveNav("/#contact")}
          className={activeNav === "/#contact" ? "active" : ""}
        >
          Contact
        </HashLink>

        {isAdmin ? (
          <Link
            to="/products#products"
            onClick={() => setActiveNav("/products#products")}
            className={activeNav === "/products#products" ? "active" : ""}
          >
            Orders List{" "}
          </Link>
        ) : (
          ""
        )}
        <button className="nav__btn" onClick={() => setIsOpen(true)}>
          <LoginControl />
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
              onClick={() => {
                toggleHidden();
              }}
            >
              <Badge badgeContent={totalCart} color="secondary">
                <ShoppingCart />

                {/* {cartIsHidden ? null : (
                  <CartDropDown
                    cartItems={cart}
                    cartIsHidden={toggleHidden}
                    totalCart={totalCart}
                  />
                )} */}
              </Badge>
            </IconButton>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
