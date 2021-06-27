import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from "./pages/Login"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import ListProducts from "./pages/ListProducts";


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/alimentos">
            <ListProducts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
