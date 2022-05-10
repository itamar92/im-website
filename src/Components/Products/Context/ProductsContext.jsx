import { useState, useEffect, createContext } from "react";

export const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [price, setPrice] = useState(0);

  // fetching products from data
  const fetchProducts = async () => {
    const data = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var body = await data.json();

    if (body.length > 0) {
      setProducts(body);
    } else {
      setError("No items");
    }
  };

  const addProduct = (name, price) => {
    let newProduct = { name: name, price: price, id: getLastProductId() + 1 };
    let p = localStorage.getItem("products");
    let arr = JSON.parse(p);
    arr.push(newProduct);
    localStorage.setItem("products", JSON.stringify(arr));
  };

  const getLastProductId = () => {
    let p = localStorage.getItem("products");
    if (p === null) {
      return 0;
    } else {
      let arr = JSON.parse(p);
      let lastItemInArry = arr.slice(-1)[0];
      return lastItemInArry.id;
    }
  };

  //#region Cart Actions
  const handleAddToCart = (product) => {
    let index = cart.findIndex((x) => x.id === product.id);
    console.log(index);
    console.log(cart);
    if (index === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...product, quantity: x.quantity + 1 } : x
        )
      );

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
            ? { ...product, quantity: product.quantity + quantity }
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
    // let sum = 0;
    // cart.map((item) => (sum += item.quantity * item.price));
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setPrice(totalPrice);
  };
  const handleTotalCart = (num) => {
    console.log(cart);
    const total = cart.reduce((acc, item) => {
      console.log("Item quantity:", item.quantity);
      console.log("acc: ", acc);

      return acc + item.quantity;
    }, 0);
    setTotalCart(total);

    console.log("Total Cart", total);
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
