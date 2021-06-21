import React, {useEffect, useState} from "react";
import {loginUser} from "../store/reducers/userReducer"
import { useDispatch, useSelector } from "react-redux";
import "../css/Header.css"
import logo from '../img/logo.png';

const Header = () => {
    const [product, setProduct] = useState("")
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loginUser(product))
    }, [product, dispatch])

    return(
        <div id="header">
            <div>
                <div id="upper-div">
                    <img id="logo" src={logo} alt="logo" width="64px" style={{"display":"inline-block"}}></img>
                    <input id="searchbar" type="text" placeholder="Pesquisar um produto" onChange={e => setProduct(e.target.value)}></input>
                    <p>{user.name}</p>
                </div>
                <div id="cat">
                </div>
            </div>
            <div>
            </div>
        </div>
    )
};

export default Header;