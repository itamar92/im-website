import React, { useContext } from "react";
import Review from "../Review";
import { ProductsContext } from "../../Products/Context/ProductsContext";
import useStyles from "../CheckoutStyles";
import "../Checkout.css";

const Checkout = () => {
  const classes = useStyles();
  const { cart } = useContext(ProductsContext);
  const { price } = useContext(ProductsContext);
  console.log(cart);
  return (
    <div className="checkout__container">
      <h2 className="checkout__title">Checkout</h2>
      <Review />
    </div>
  );
};

export default Checkout;
