import React, { useState, useMemo, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import LoginForm from "./Components/Login/LoginForm";
import ProductProvider from "./Components/Products/Context/ProductsContext";
import UserProvider from "./Components/Login/UserContext";
import NotFound from "./Components/NotFound";
import Checkout from "./Components/CheckoutForm/Checkout/Checkout";
import Footer from "./Components/Footer/Footer";
import SingleProduct from "./Components/Products/Product/SingleProduct";
import OrdersList from "./Components/Cart/OrdersList";
import ProtectedRoute from "./Components/ProtectedRoute";
import LoginPermission from "./Components/Login/LoginPermission";
import CreateProduct from "./Components/Products/CreateProduct";
import EditProduct from "./Components/Products/EditProduct";

function App() {
  return (
    <div>
      <UserProvider>
        <ProductProvider>
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

              <ProtectedRoute path="/checkout">
                <Checkout />
              </ProtectedRoute>

              <Route exact path="/about">
                <About />
              </Route>
              <ProtectedRoute path="/orderslist">
                <OrdersList />
              </ProtectedRoute>
              <Route path="/createproduct">
                <CreateProduct />
              </Route>
              <Route path="/editproduct/:id">
                <EditProduct />
              </Route>
              <Route path="/loginpermission">
                <LoginPermission />
              </Route>
              <Route path="/*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </ProductProvider>
      </UserProvider>
      <Footer />
    </div>
  );
}

export default App;
