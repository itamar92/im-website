import React, { useContext } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core";
import { ProductsContext } from "../../Components/Products/Context/ProductsContext";
import "./Checkout.css";

const Review = () => {
  const { cart } = useContext(ProductsContext);
  const { price } = useContext(ProductsContext);
  console.log(cart);
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
        </Typography>
      </List>
    </div>
  );
};

export default Review;
