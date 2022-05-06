import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";

const Review = ({ cartItems, total }) => {
  console.log(cartItems);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summery
      </Typography>
      <List disablePadding>
        {cartItems.map((product) => (
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
            {total}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
