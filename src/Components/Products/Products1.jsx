import React, { useEffect, useState } from "react";
import ProductCopy from "./Product/Product copy";
import Product2 from "./Product/Product2";
import Grid from "@material-ui/core/Grid";
import useFetch from "../usefetch";
import "./products.css";
import Product from "./Product/Product";

const Products1 = ({ products, onAddToCart }) => {
  // const { data, error, isPending } = useFetch("http://localhost:5000/products");
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState("");

  // const fetchProducts = async () => {
  //   const data = await fetch("http://localhost:5000/products", {
  //     method: "GET",
  //   });
  //   var body = await data.json();
  //   let products = body.products;
  //   if (products.length > 0) {
  //     setProducts(products);
  //   } else {
  //     setError("No items");
  //   }
  // };

  localStorage.setItem("products", JSON.stringify(products));

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // if (products) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="container products__container">
        <h1 className="products__title">Products List</h1>
        {products &&
          products.map((product) => (
            <Grid
              className="grid__product"
              key={product.id}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              item
              xs="auto"
            >
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
      </div>
    </div>
  );
};

export default Products1;
