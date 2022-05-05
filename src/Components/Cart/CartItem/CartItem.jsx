import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./cartItemStyles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();

  // const handleUpdateCartQty = (Item, quantity) => {
  //   onUpdateCartQty(Item, quantity);
  //   console.log(Item);
  // };
  // const handleRemoveFromCart = (Item) => {
  //   console.log("Removed");
  //   console.log(Item);
  //   //   setCart(arr);
  // };

  return (
    <Card className="cart-item">
      <CardMedia
        component="img"
        image="./Music/Logo_IM icon Black.png"
        alt={item.productName}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.productName}</Typography>
        <Typography variant="h5">${item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => onRemoveFromCart(item)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => onUpdateCartQty(item)}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
