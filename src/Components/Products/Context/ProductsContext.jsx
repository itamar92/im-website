import react, { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var body = await data.json();

    if (body.products.length > 0) {
      setProducts(body.products);
    } else {
      setError("No items");
    }
  };

  //   localStorage.setItem("products", JSON.stringify(products));

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
