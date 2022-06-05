import React, { useState, useEffect, useContext } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import useStyles from "./cartStyles";
import { ProductsContext } from "../../Context/ProductsContext";
import { UserContext } from "../../Context/UserContext";

const Cart = () => {
  const classes = useStyles();
  const { cart } = useContext(ProductsContext);
  const { handleRemoveFromCart, handleEmptyCart, handleUpdateCartQty } =
    useContext(ProductsContext);
  const { handleCheckout } = useContext(ProductsContext);
  const { isLoggedIn } = useContext(UserContext);
  const [error, setError] = useState("");
  const [price, setPrice] = useState(0);

  const getTotalPrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));
    setPrice(sum);
  };

  const handleCheckoutClick = () => {
    setError("You need to Sign in First");
  };

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  const renderEmptyCart = () => (
    <div className={classes.cartContainer}>
      <Typography variant="subtitle1">
        You have no items in your shopping cart,
        <Link className={classes.link} to="/products">
          start adding some
        </Link>
        !
      </Typography>
    </div>
  );

  if (!cart) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.map((Item) => (
          <Grid item xs={12} sm={4} key={Item.id}>
            <CartItem
              item={Item}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        {error !== "" ? <div className={classes.error}>{error}</div> : ""}
        <Typography variant="h4">Subtotal: ${price}</Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          {isLoggedIn ? (
            <Button
              className={classes.checkoutButton}
              component={Link}
              to="/checkout"
              onClick={handleCheckout}
              size="large"
              type="button"
              variant="contained"
              color="primary"
            >
              Checkout
            </Button>
          ) : (
            <>
              <Button
                className={classes.checkoutButton}
                onClick={handleCheckoutClick}
                size="large"
                type="button"
                variant="contained"
                color="primary"
              >
                Checkout
              </Button>
            </>
          )}
        </div>
      </div>
    </>
  );

  return (
    <Container className="Cart__Contant">
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
