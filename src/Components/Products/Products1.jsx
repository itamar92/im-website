import React, { useEffect, useState } from "react";
import ProductCopy from "./Product/Product copy";
import Product2 from "./Product/Products2";
import Grid from "@material-ui/core/Grid";
import useFetch from "../usefetch";
import { useParams } from "react-router-dom";
import "./products.css";

const Products1 = ({ onAddToCart }) => {
  const { id } = useParams();
  const { products, error, isPending } = useFetch(
    "http://localhost:5000/products"
  );
  if (isPending) return <p>Loading...</p>;

  if (error || !Array.isArray(products))
    return <p> There was an error loading your products</p>;

  return (
    <div className="container">
      <div className="container products__container">
        <h1 className="products__title">Products List</h1>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product2 product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </div>
    </div>
  );
};

export default Products1;
