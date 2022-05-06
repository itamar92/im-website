import { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  // fetching products from data
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

  //#region Cart Actions
  const handleAddToCart = (product) => {
    let tempCart = [...cart];
    let tempProducts = [...products];
    let tempItem = tempCart.find((item) => item.id === product.id);
    if (!tempItem) {
      tempItem = tempProducts.find((item) => item.id === product.id);
      setCart([...cart, { ...tempItem, quantity: 1 }]);
      handlePrice();
    }
  };

  const handleUpdateCartQty = (product, quantity) => {
    const exist = cart.find((x) => x.id === product.id);
    console.log(exist);
    console.log(cart);
    console.log(exist.quantity);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id
            ? { ...product, quantity: (x.quantity += quantity) }
            : x
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // const handleUpdateCartQty = (product, quantity) => {
  //   const arr = cart;
  //   let tempCart = [...cart];
  //   let tempProducts = [...products];
  //   let tempItem = cart.find((item) => item.id === product.id);
  //   console.log("tempItem:");
  //   console.log(tempItem.id);
  //   console.log(product);
  //   if (!tempItem) {
  //     tempItem = products.find((item) => item.id === product.id);
  //     setCart([...cart, { ...tempItem, quantity: quantity }]);
  //     handlePrice();
  //   } else {
  //     setCart([...product, { quantity: (product.quantity += quantity) }]);
  //   }
  // };

  const handleRemoveFromCart = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
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

  const handlePrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));
    setPrice(sum);
  };
  //#endregion

  localStorage.setItem("products", JSON.stringify(products));

  useEffect(() => {
    fetchProducts();
    handlePrice();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        price,
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
