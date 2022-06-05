import { useState, useEffect, createContext, useContext } from "react";
import { UserContext } from "./UserContext";

export const ProductsContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [price, setPrice] = useState(0);
  const [userOrders, setUserOrders] = useState([]);

  const { details, setLogout } = useContext(UserContext);

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

  const fetchPostProduct = async (newProduct) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    // .then((res) => {
    //   alert("File Upload success");
    // })
    // .catch((err) => alert("File Upload Error"));
  };
  //#region Add/Change Product
  const addProduct = (newItem) => {
    let newProduct = {
      id: getLastProductId() + 1,
      ...newItem,
    };
    let p = localStorage.getItem("products");
    let arr = JSON.parse(p);
    arr.push(newItem);
    localStorage.setItem("products", JSON.stringify(arr));
    setProducts((prev) => [...prev, newProduct]);
  };

  const changeProduct = (updateItem) => {
    let updateProduct = { ...updateItem };
    let itemIndex = products.findIndex((obj) => obj.id === updateItem.id);

    setProducts((prev) => [
      ...prev.slice(0, itemIndex),
      updateProduct,
      ...prev.slice(itemIndex + 1, prev.length),
    ]);

    let p = localStorage.getItem("products");
    let arr = JSON.parse(p);
    arr.push(updateItem);
    localStorage.setItem("products", JSON.stringify(products));
  };

  const deleteProduct = (id) => {
    let newProducts = products.filter((item) => item.id !== id);
    console.log(newProducts);
    setProducts(newProducts);
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
  //#endregion

  //#region Cart Actions
  const handleAddToCart = (product) => {
    let index = cart.findIndex((x) => x.id === product.id);
    if (index === -1) {
      setCart([...cart, { ...product, quantity: 1 }]);
      localStorage.setItem(
        "UserCart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    } else {
      const newArrInCart = cart.map((x) =>
        x.id === product.id ? { ...product, quantity: x.quantity + 1 } : x
      );
      setCart(newArrInCart);
      localStorage.setItem("UserCart", JSON.stringify(newArrInCart));
    }
  };

  const handleUpdateCartQty = (product, quantity) => {
    const exist = cart.find((x) => x.id === product.id);

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
      if (exist.quantity === 0) {
        handleRemoveFromCart(product.id);
      }
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    localStorage.setItem("UserCart", JSON.stringify(cart));
  };

  const handleRemoveFromCart = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    handleTotalCart();
    localStorage.setItem("UserCart", JSON.stringify(arr));
  };

  const handleEmptyCart = () => {
    setCart([]);
    handleTotalCart();
    localStorage.setItem("UserCart", JSON.stringify([]));
  };

  const handlePrice = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    setPrice(totalPrice);
  };
  const handleTotalCart = () => {
    const total = cart.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
    setTotalCart(total);
  };

  //#endregion

  //#region User Orders
  const getLastOrderId = () => {
    if (userOrders === null || userOrders.length === 0) {
      return 0;
    } else {
      let lastItemInArry = userOrders.length;

      return lastItemInArry;
    }
  };

  const collectProductsName = () => {
    let namesArr = [];
    for (var i = 0; i < cart.length; i++) {
      namesArr.push(cart[i].productName);
    }
    return namesArr;
  };

  function subtotal() {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    return total;
  }

  const handleCheckout = () => {
    let orderIdGen = `ABC-OI-${getLastOrderId()}`;
    let userDetails = details;
    let productsNameArr = collectProductsName();
    let totalCart = subtotal();

    let newOrder = {
      orderId: orderIdGen,
      userName: userDetails.name,
      userEmail: userDetails.email,
      productsNameArr: productsNameArr,
      totalCart: totalCart,
      payment: "waiting",
    };
    setUserOrders((prev) => [...prev, newOrder]);
    
  };

  //#endregion

  const setLoggedInUserCart = () => {
    const userLogin = JSON.parse(localStorage.getItem("login"));
    const userCart = JSON.parse(localStorage.getItem("UserCart"));
    if (userLogin === true) userCart.length && setCart(userCart);
  };

  const setLoggedOutUserCart = () => {
    const userLogin = JSON.parse(localStorage.getItem("login"));
    if (userLogin === false) {
      localStorage.setItem("UserCart", JSON.stringify([]));
      setCart([]);
    }
  };

  localStorage.setItem("products", JSON.stringify(products));

  useEffect(() => {
    setLoggedInUserCart();
    const userCart = JSON.parse(localStorage.getItem("UserCart"));
    setCart(userCart);
  }, [setLogout]);

  useEffect(() => {
    fetchProducts();
    handlePrice();
    handleTotalCart();
    handleCheckout();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        cart,
        price,
        totalCart,
        error,
        handleAddToCart,
        handleUpdateCartQty,
        handleRemoveFromCart,
        handleEmptyCart,
        deleteProduct,
        addProduct,
        changeProduct,
        handleCheckout,
        userOrders,
        setUserOrders,
        setLoggedInUserCart,
        setLoggedOutUserCart,
        fetchPostProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductProvider;
