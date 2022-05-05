import React, { useState, useEffect, useContext } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem/CartItem";
import useStyles from "./cartStyles";
import { ProductsContext } from "../Products/Context/ProductsContext";

const Cart = () => {
  const classes = useStyles();
  const { cart } = useContext(ProductsContext);
  const { handleAddToCart } = useContext(ProductsContext);
  const { handleRemoveFromCart } = useContext(ProductsContext);
  const { handleEmptyCart } = useContext(ProductsContext);
  const { handleUpdateCartQty } = useContext(ProductsContext);

  const [price, setPrice] = useState(0);

  // const handleEmptyCart = () => onEmptyCart();
  const onRemoveFromCart = () => {
    handleRemoveFromCart();
    handlePrice();
  };

  const onUpdateCartQty = () => {
    handleUpdateCartQty();
    handlePrice();
  };

  const handlePrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));
    setPrice(sum);
  };

  useEffect(() => {
    handlePrice();
  });

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/products">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!cart) return "Loading";

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.map((Item) => (
          <Grid item xs={12} sm={4} key={Item.id}>
            <CartItem
              item={Item}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
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
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
