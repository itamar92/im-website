import React, { useContext } from "react";
import Review from "../Review";
import { ProductsContext } from "../../Products/Context/ProductsContext";

const Checkout = () => {
  const { cart } = useContext(ProductsContext);
  const { price } = useContext(ProductsContext);
  console.log(cart);
  return (
    <>
      <div>Checkout</div>
      <Review cartItem={cart} total={price} />
    </>
  );
};

export default Checkout;
