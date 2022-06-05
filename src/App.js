import React, {  useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import LoginForm from "./Components/Login/LoginForm";
import NotFound from "./Components/NotFound";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import SingleProduct from "./Components/Products/Product/SingleProduct";
import OrdersList from "./Components/Cart/OrdersList";
import ProtectedRoute from "./Components/ProtectedRoute";
import LoginPermission from "./Components/Login/LoginPermission";
import CreateProduct from "./Components/Products/CreateProduct";
import EditProduct from "./Components/Products/EditProduct";
import { UserContext } from "./Context/UserContext";
import { ProductsContext } from "./Context/ProductsContext";

function App() {
  const { setLoggedInUser } = useContext(UserContext);
  const { setLoggedOutUserCart, setLoggedInUserCart } =
    useContext(ProductsContext);

  useEffect(() => {
    setLoggedInUser();
    setLoggedInUserCart();
    setLoggedOutUserCart();
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>

          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/product/:id">
            <SingleProduct />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>

          <ProtectedRoute  path="/checkout">
            <Checkout />
          </ProtectedRoute>

          <Route exact path="/about">
            <About />
          </Route>
          <ProtectedRoute checkAdmin path="/orderslist">
            <OrdersList />
          </ProtectedRoute >
          <ProtectedRoute checkAdmin path="/createproduct">
            <CreateProduct />
          </ProtectedRoute>
           <ProtectedRoute checkAdmin path="/editproduct/:id">
            <EditProduct />
          </ProtectedRoute>
          <Route path="/login-permission">
            <LoginPermission />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
