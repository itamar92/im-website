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
  const [cart, setCart] = useState({});
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var body = await data.json();
    if (body.length > 0) {
      setProducts({ products: body });
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

  const handleAddToCart = async (productId, quantity) => {
    const item = await cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (ItemId, quantity) => {
    const response = await cart.update(ItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (ItemId) => {
    const response = await cart.remove(ItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await cart.refresh();

    setCart(newCart);
  };

  /*window.localStorage.removeItem("user");*/

  useEffect(() => {
    /*fetchProducts();*/
    localStorage.setItem("products", JSON.stringify(products));
    /*fetchCart();*/
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setItems(user);
    }
  }, [products]);

  return (
    <div>
      <Router>
        <Navbar items={items} />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/products">
            <Products1 onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
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
