import React, { useEffect, useState, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import "./products.css";
import Product from "./Product/Product";
import { ProductsContext } from "./Context/ProductsContext";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { handleAddToCart } = useContext(ProductsContext);
  // const { data, error, isPending } = useFetch("http://localhost:5000/products");

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

  // localStorage.setItem("products", JSON.stringify(products));

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // if (products) return <p>Loading...</p>;

  return (
    <section id="products" style={{ marginBottom: "1rem" }}>
      <div className="container">
        <div className=" products__container">
          <h1 className="products__title">Products List</h1>
          {products &&
            products.map((product) => (
              <div className="grid__product" key={product.id}>
                <Product product={product} onAddToCart={handleAddToCart} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
