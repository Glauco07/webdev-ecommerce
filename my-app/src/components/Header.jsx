import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, connect } from "react-redux";
import { Link } from "react-router-dom";

import "../css/Header.css"
import logo from '../img/logo.png';
import lupa from '../img/lupa.png';
import cart from '../img/cart.png';

import {retrieveProducts} from "../store/reducers/productsReducer";


const Navbar = () => {
    return (
        <div id="categories">
            <Link to="/alimentos">
                <button className="category">Alimentos</button>
            </Link>

            <Link to="/brinquedos">
                <button className="category">Brinquedos</button>
            </Link>

            <Link to="/casinhas">
                <button className="category">Casinhas</button>
            </Link>

            <Link to="/remedios">
                <button className="category">Remédios</button>
            </Link>

            <Link to="/about">
                <button className="category">Sobre Nós</button>
            </Link>
        </div>
    )
}


const Header = ({retrieveProducts}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const user = useSelector(state => state.user);
    const cartState = useSelector(state => state.cart)
    const quantityProducts = cartState.products.reduce((total, current) =>  total + current.quantity, 0)

    useEffect(() => {
        retrieveProducts()
    }, [retrieveProducts]);

    return(
        <div id="header">
            <div id="upper-div" className="center">
                <Link to="/">
                    <img id="logo" src={logo} alt="logo" width="64px" style={{"display":"inline-block"}}></img>
                </Link>

                <div>
                    <input id="searchbar" type="text" value={searchTerm} placeholder="Pesquisar um produto" onKeyUp={(e)=>{if (e.keyCode === 13) {
                        window.location.assign('/busca?searchTerm=' + searchTerm)
                    }}} onChange={e => setSearchTerm(e.target.value)}></input>
                    <img id="lupa" src={lupa} onClick={() =>{window.location.assign('/busca?searchTerm=' + searchTerm)}} alt="lupa" width="23px"></img>
                </div>

                {user?._id === "" ? 
                    <Link to="/login">
                        <button id="login">Fazer login</button>
                    </Link>
                    :
                    <Link to="/user">
                        <button id="login">{user?.name}</button>
                    </Link>
                }

                <Link to="/cart">
                    {quantityProducts === 0 ? <div className="cart-quantity-div" style={{"visibility": "hidden"}}></div> : <div className="cart-quantity-div"><span className="cart-quantity">{quantityProducts}</span></div>}
                    <img id="cart" src={cart} alt="cart" width="40px"></img>
                </Link>
            </div>

            <Navbar />
        </div>
    )
};

export default connect(null,{retrieveProducts})(withRouter(Header));