import React, {useEffect, useState} from "react";

import {loginUser} from "../store/reducers/userReducer"
import { useDispatch, useSelector } from "react-redux";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import About from "./About";

import "../css/Header.css"
import logo from '../img/logo.png';
import lupa from '../img/lupa.png';
import cart from '../img/cart.png';


const Navbar = () => {
    return (
        <div id="categories">
            <Link to="/alimentos">
                <button className="category">Alimentos</button>
            </Link>

            <Link to="/about">
                <button className="category">Brinquedos</button>
            </Link>

            <Link to="/casinhas">
                <button className="category">Casinhas</button>
            </Link>

            <Link to="/remedios">
                <button className="category">Remédios</button>
            </Link>
        </div>
    )
}


const Header = () => {
    const [product, setProduct] = useState("")

    return(
        <div id="header">
            <div className="center">
                <div id="upper-div" className="center">
                    <Router>
                        <Link to="/">
                            <img id="logo" src={logo} alt="logo" width="64px" style={{"display":"inline-block"}}></img>
                        </Link>
                    </Router>

                    <div id>
                        <input id="searchbar" type="text" placeholder="Pesquisar um produto" onChange={e => setProduct(e.target.value)}></input>
                        <img id="lupa" src={lupa} alt="lupa" width="23px"></img>
                    </div>

                    <button id="login">Fazer login</button>
                    <img src={cart} alt="cart" width="40px"></img>

                    </div>
                        <div>
                            <Router>
                            <Navbar />
                            <Switch>
                                <Route path="/about">
                                    <About />
                                </Route>
                            </Switch>
                            </Router>
                        </div>
                    </div>
                <div>
            </div>
        </div>
    )
};

export default Header;