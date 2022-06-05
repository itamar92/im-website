import React from "react";
import Review from "../Review";
import "../Checkout.css";

const Checkout = () => {

  return (
    <div className="checkout__container">
      <h2 className="checkout__title">Checkout</h2>
      <Review />
    </div>
  );
};

export default Checkout;
