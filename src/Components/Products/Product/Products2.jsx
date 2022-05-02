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

const Products2 = ({ product, onAddToCart }) => {
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

          <div className="card-footer">
            <div className="">
              <div className="btn-group">
                <CardActions disableSpacing className={classes.cardActions}>
                  <IconButton
                    aria-label="Add to Cart"
                    onClick={() => onAddToCart(product.id)}
                  >
                    <AddShoppingCart />
                  </IconButton>
                </CardActions>
              </div>
            </div>
            {/* float-left ends here */}
          </div>
          <div className="float-right">{this.props.children}</div>
        </div>
        {/* card-footer ends here */}
      </div>
    </div>
  );
};

export default Products2;
