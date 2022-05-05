import react, { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);

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

  const handleAddToCart = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);

    console.log(cart.indexOf(product));
  };

  // const handleAddToCart = (product) => {
  //   const exist = cart.find((x) => x.id === product.id);
  //   if (exist) {
  //     setCart(
  //       cart.map((x) => (x.id === product.id ? [...exist, { quantity: 1 }] : x))
  //     );
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  //   console.log(exist.id);
  //   console.log(cart);
  //   console.log(exist.quantity);
  // };

  const handleUpdateCartQty = (item, quantity) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].quantity += quantity;

    if (arr[ind].quantity === 0) arr[ind].quantity = 1;
    setCart([...arr]);
  };

  const handleRemoveFromCart = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };
  // const handleRemoveFromCart = (product) => {
  //   const exist = cart.find((x) => x.id === product.id);
  //   if (exist.quantity === 1) {
  //     setCart(cart.filter((x) => x.id !== product.id));
  //   } else {
  //     setCart(
  //       cart.map((x) =>
  //         x.id === product.id ? [...exist, { quantity: exist.quantity - 1 }] : x
  //       )
  //     );
  //   }
  // };

  const handleEmptyCart = () => {
    setCart([]);
  };

  localStorage.setItem("products", JSON.stringify(products));

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        error,
        handleAddToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
        handleEmptyCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
