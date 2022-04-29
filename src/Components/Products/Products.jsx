import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./productsStyles";
import useFetch from "../usefetch";
import { useParams } from "react-router-dom";
import "./products.css";

const Products = ({ onAddToCart }) => {
  const classes = useStyles();
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const fetchProducts = async () => {
    const data = await fetch("data/Products-db.json", {
      method: "GET",
    });
    var body = await data.json();
    if (body.length > 0) {
      setProducts({ products: body });
    } else {
      setError("No items");
    }
  };
  // const { products, error, isPending } = useFetch(
  //   "http://localhost:5000/products"
  // );
  console.log("---");
  console.log(products);
  console.log(products.length);
  console.log(error);
  // console.log(isPending);
  console.log("---");

  // useEffect(() => {
  //   fetchProducts();
  // });
  fetchProducts();
  console.log(products.length);
  return (
    <div>
      {products.length && <p>Loading...</p>}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
          {products.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <Product product={product} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};

export default Products;
