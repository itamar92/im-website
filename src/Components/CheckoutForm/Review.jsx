import React, { useContext } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { ProductsContext } from "../../Components/Products/Context/ProductsContext";

const Review = ({ cartItems, total }) => {
  const { cart } = useContext(ProductsContext);
  const { price } = useContext(ProductsContext);
  console.log(cart);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summery
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.productName}>
            <ListItemText
              primary={product.productName}
              secondary={`Quantity: ${product.quantity}`}
            />
            <Typography variant="body2">
              {product.price * product.quantity}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
            {price}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
