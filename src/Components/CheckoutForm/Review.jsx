import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Typography, List, ListItem, Button } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductsContext } from "../../Context/ProductsContext";
import "./Checkout.css";

const Review = () => {
  const { cart, handleEmptyCart } = useContext(ProductsContext);
  const [price, setPrice] = useState(0);

  const history = useHistory();

  const getTotalPrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));
    setPrice(sum);
  };

  const notifySuccess = () => {
    toast.success("Payment Success!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleClick = () => {
    notifySuccess();
    handleEmptyCart();
    setTimeout(() => history.push("/"), 2000);
  };

  useEffect(() => {
    getTotalPrice();
  }, [cart]);

  return (
    <div className="grid__checkout">
      <Typography variant="h6" gutterBottom>
        Order Summery
      </Typography>
      <List className="checkout__card ">
        {cart.map((product) => (
          <ListItem
            className="checkout__cards items"
            divider
            style={{ padding: "5px 10px" }}
            key={product.productName}
          >
            <Typography gutterBottom variant="h5" component="h2">
              {product.productName}
            </Typography>
            <span>
              <Typography gutterBottom component="p">
                {`Quantity: ${product.quantity}`}
              </Typography>
              <Typography variant="body2">
                ${product.price * product.quantity}
              </Typography>
            </span>
          </ListItem>
        ))}
        <Typography className="checkout__cards" style={{ padding: "10px 0" }}>
          <Typography>Total</Typography>
          <Typography style={{ fontWeight: 700 }}>${price}</Typography>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss={false}
          />
          <Button
            className="btn-payment"
            size="small"
            type="button"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Payment
          </Button>
        </Typography>
      </List>
    </div>
  );
};

export default Review;
