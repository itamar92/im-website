import React, { useContext, useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  Button,
  Snackbar,
} from "@material-ui/core";
import { ProductsContext } from "../../Context/ProductsContext";
import MuiAlert from "@mui/material/Alert";
import "./Checkout.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Review = () => {
  const { cart } = useContext(ProductsContext);
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const getTotalPrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));
    setPrice(sum);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={4000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Payment Success!
            </Alert>
          </Snackbar>
        </Typography>
      </List>
    </div>
  );
};

export default Review;
