import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from "./pages/Header";
import Product from "./pages/Product";
import Footer from "./pages/Footer";
import Users from "./pages/User";
import Home from "./pages/Home";
import About from "./pages/About";


const Teste = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}

const App = () => {
  return (
    <>
      <Header />
        <Router>
          <Teste />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users user={"Osama"}/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
          <Product />
      <Footer />
    </>
  );
}

export default App;
