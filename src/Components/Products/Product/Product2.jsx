import React from "react";
import SoundCloud from "react-player/soundcloud";
import "../products.css";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./productStyles";

const Product2 = ({ product, onAddToCart, children }) => {
  const classes = useStyles();

  return (
    <div className="product__content">
      <div className="product__cards">
        <div className="product__card">
          <div className="text-muted"></div>
          <div className="player-wrapper">
            <SoundCloud
              className="react-player"
              url={product.url}
              controls={true}
              width="540px"
              height="150px"
            />
          </div>
          <h5 className="pt-2 border-top">{product.productName}</h5>

          <div>$ {product.price}</div>

          {/* card body ends here */}
        </div>
      </div>
    </div>
  );
};

export default Product2;
