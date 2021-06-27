import React, {useEffect, useState} from "react";

import {loginUser} from "../store/reducers/userReducer"
import { useDispatch, useSelector } from "react-redux";

import {
    Link
} from "react-router-dom";

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
    const [product, setProduct] = useState("");
    const user = useSelector(state => state.user);

    return(
        <div id="header">
            <div className="center">
                <div id="upper-div" className="center">
                    <Link to="/">
                        <img id="logo" src={logo} alt="logo" width="64px" style={{"display":"inline-block"}}></img>
                    </Link>

                    <div id>
                        <input id="searchbar" type="text" placeholder="Pesquisar um produto" onChange={e => setProduct(e.target.value)}></input>
                        <img id="lupa" src={lupa} alt="lupa" width="23px"></img>
                    </div>
                    {user.id === "" ? 
                        <Link to="/login">
                            <button id="login">Fazer login</button>
                        </Link>
                        :
                        <Link to="/user">
                            <p>{user.name}</p>
                        </Link>
                    }
                    <Link to="/cart">
                        <img src={cart} alt="cart" width="40px"></img>
                    </Link>
                </div>
            </div>
            <Navbar />
        </div>
    )
};

export default Header;