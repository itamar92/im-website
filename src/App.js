import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import PrimarySearchAppBar from "./Components/Navbar/Navebar1";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import Products1 from "./Components/Products/Products1";
import Cart from "./Components/Cart/Cart";
import LoginForm from "./Components/Login/LoginForm";
import ProductsList from "./Components/Products/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);
  const [userName, setUser] = useState([]);

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
  /*const fetchCart = async () => {
    const data = await fetch("http://localhost:5000/products", {
      method: "POST",
    });
    var body = await data.json();
    if (body.length > 0) {
      setCart({ cart: body });
    } else {
      setError("No items");
    }
  };*/

  const handleAddToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) => (x.id === product.id ? { ...exist, quantity: 1 } : x))
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log(product.id);
    console.log(cart);
    console.log(exist.quantity);
  };
  // const handleAddToCart = (item) => {
  //   if (cart.indexOf(item) >= -1) return setCart([...cart, item]);
  // };

  const handleUpdateCartQty = (item, quantity) => {
    console.log(item);
    const itemId = cart[item.id];

    cart[itemId].quantity += quantity;

    if (cart[itemId].quantity === 0) cart[itemId].quantity = 1;
    setCart([...cart]);
  };

  const handleRemoveFromCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.id !== product.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  // const handleRemoveFromCart = (id) => {
  //   const arr = cart.filter((item) => item.id !== id);
  //   setCart(arr);
  // };

  const handleEmptyCart = async () => {
    setCart([]);
  };

  const refreshCart = async () => {
    const newCart = await cart.refresh();

    setCart(newCart);
  };

  /*window.localStorage.removeItem("user");*/

  useEffect(() => {
    fetchProducts();
    // localStorage.setItem("products", JSON.stringify(products));
    // /*fetchCart();*/
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (user) {
    //   setUser(user);
    // }
  }, []);

  return (
    <div>
      <Router>
        <Navbar totalItems={cart.length} user={userName} />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/products">
            <Products1
              products={products}
              onAddToCart={handleAddToCart}
              handleUpdateCartQty
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

// <Navbar />
//         <div className="content">
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/create">
//               <Create />
//             </Route>
//             <Route path="/blogs/:id">
//               <BlogDetails />
//             </Route>
//             <Route path="*">
//               <NotFound />
//             </Route>
//           </Switch>
//         </div>
