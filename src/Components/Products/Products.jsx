import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./products.css";
import Product from "./Product/Product";
import { ProductsContext } from "../../Context/ProductsContext";
import { UserContext } from "../../Context/UserContext";
import AddIcon from "@mui/icons-material/Add";
import {  Button } from "@material-ui/core";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const { handleAddToCart } = useContext(ProductsContext);
  const { addProduct, deleteProduct } = useContext(ProductsContext);
  const { isAdmin } = useContext(UserContext);

  return (
    <section id="products" style={{ marginBottom: "1rem" }}>
      <div className="container">
        <div className=" products__container">
          <h1 className="products__title">Products List</h1>
          {products &&
            products.map((product) => (
              <div className="grid__product" key={product.id}>
                <Product
                  product={product}
                  onAddToCart={handleAddToCart}
                  isAdmin={isAdmin}
                  deleteProduct={deleteProduct}
                  addProduct={addProduct}
                />
              </div>
            ))}
          {isAdmin && (
            <div>
              <Button
                className="btn-add"
                component={Link}
                to="/createproduct"
                size="large"
                type="button"
                variant="contained"
                color="primary"
              >
                <AddIcon />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
