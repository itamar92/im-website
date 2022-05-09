import React, { useState, useMemo } from "react";
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

function App() {
  const [userName, setUser] = useState(null);
  const [details, setDetails] = useState({});

  const user = useMemo(() => ({ userName, setUser }), [userName, setUser]);
  const userDetails = useMemo(
    () => ({ details, setDetails }),
    [details, setDetails]
  );

  /*window.localStorage.removeItem("user");*/

  // useEffect(() => {
  // fetchProducts();
  // localStorage.setItem("products", JSON.stringify(products));
  // /*fetchCart();*/
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     setUser(user.name);
  //   }
  // }, []);

  return (
    <div>
      <UserProvider value={{ user, userDetails }}>
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
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route exact path="/checkout">
                <Checkout />
              </Route>

              <Route exact path="/about">
                <About />
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
