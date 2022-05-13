import React, { useState, useContext } from "react";
import "../products.css";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { ProductsContext } from "../Context/ProductsContext";

const SingleProduct = () => {
  const { products, handleAddToCart } = useContext(ProductsContext);
  const [productToShow, setProductToShow] = useState([]);

  let { id } = useParams();
  if (!id) return null;

  let productFilter = products.filter((item) => item.id === id);
  console.log("product Filter: ", productFilter);
  setProductToShow(productFilter);

  console.log("product to show: ", productToShow);
  console.log("product id to show: ", id);

  // const productToShow = products.filter((product) => {
  //   return product.id === id;
  // });

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
