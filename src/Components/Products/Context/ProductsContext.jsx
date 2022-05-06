import { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState();
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
    let index = cart.findIndex((x) => x.id === product.id);
    console.log(index);
    if (index === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
      handlePrice();
      handleTotalCart(1);
      console.log(product);
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...product, quantity: (x.quantity += 1) } : x
        )
      );
      handlePrice();
      handleTotalCart();
      console.log(product.quantity);
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
            ? { ...product, quantity: (product.quantity += quantity) }
            : x
        )
      );
      handlePrice();
      handleTotalCart();
      console.log(exist.quantity);
      if (exist.quantity === 0) {
        handleRemoveFromCart(product.id);
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    handleTotalCart();
  };

  const handleEmptyCart = () => {
    setCart([]);
    handleTotalCart();
  };

  const handlePrice = () => {
    let sum = 0;
    cart.map((item) => (sum += item.quantity * item.price));
    setPrice(sum);
  };
  const handleTotalCart = (num) => {
    let sum = 0;
    const total = cart.map((item) => (sum += item.quantity));
    {
      total === 0 ? (sum = num) : (sum = sum);
    }
    setTotalCart(sum);
    console.log(sum);
  };

  //#endregion

  localStorage.setItem("products", JSON.stringify(products));

  useEffect(() => {
    fetchProducts();
    handlePrice();
    handleTotalCart();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        cart,
        price,
        totalCart,
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
