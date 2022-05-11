import React, { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import AudioPlayer from "material-ui-audio-player";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./productStyles";
import "../products.css";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { ProductsContext } from "../Context/ProductsContext";

const SingleProduct = () => {
  const { products, handleAddToCart } = useContext(ProductsContext);
  let { id } = useParams();
  if (!id) return null;
  const productToShow = products.filter((product) => {
    return (product.id = id);
  });
  console.log("product to show: ", productToShow);

  return (
    <section id="products" style={{ marginBottom: "1rem" }}>
      <div className="container">
        <div className=" products__container">
          <h1 className="products__title">{productToShow.productName}</h1>

          <div className="grid__product">
            <Product product={productToShow} onAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
