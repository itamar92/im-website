import React, { useState } from "react";
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
import { Link, useLocation } from "react-router-dom";
import LOGO from "../../Image/Logo_IM_1.png";
import Login from "../Login/Login";
import Portalpage from "../Login/Portalpage";
import useStyles from "./navbarStyles";
import "./navbar.css";

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          {/* <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge> */}
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={LOGO}
              alt="logo"
              height="10px"
              className={classes.image}
            />{" "}
          </Typography>
          <Typography
            component={Link}
            to="/products"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Products
          </Typography>
          <Typography
            component={Link}
            to="/products"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Contact
          </Typography>
          <Typography
            component={Link}
            to="/about"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            About
          </Typography>
          <Typography
            variant="h6"
            className={classes.title}
            color="inherit"
            onClick={() => setIsOpen(true)}
          >
            Login
            <Portalpage open={isOpen} onClose={() => setIsOpen(false)}>
              {<Login />}
            </Portalpage>
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
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
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
