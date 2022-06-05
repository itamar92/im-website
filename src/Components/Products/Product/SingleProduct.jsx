import React, { useState, useContext, useEffect } from "react";
import "../products.css";
import { useParams } from "react-router-dom";
import Product from "./Product";
import { ProductsContext } from "../../../Context/ProductsContext";

const SingleProduct = () => {
  const { products, handleAddToCart } = useContext(ProductsContext);
  const [productToShow, setProductToShow] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    if (!id) return null;
    let productFilter = products.find((item) => item.id === parseInt(id));

    setProductToShow(productFilter);
    setIsLoading(false);
  }, [id]);

  return (
    <section id="products" style={{ marginBottom: "1rem" }}>
      <div className="container">
        <div className=" products__container">
          <h1 className="products__title">{productToShow.productName}</h1>

          <div className="grid__product">
            {!isLoading && (
              <Product product={productToShow} onAddToCart={handleAddToCart} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
