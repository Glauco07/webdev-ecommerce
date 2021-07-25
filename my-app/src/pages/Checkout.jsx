import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../store/reducers/cartReducer";
import { http } from "../store/axios"

import "../css/Checkout.css"

const purchaseRequest = async (user, cart) => {
    if (user._id === '') {
        window.alert("Precisa estar logado para comprar")
        return false
    }
    try {
        await http.post("/purchase", {userId: user._id, totalPrice: cart.totalPrice})
        
        window.alert("Compra efetuada com sucesso.")
        return true
    } catch (e) {
        window.alert("Error purchasing")
        return false
    }
}

const Checkout = () => {
    const user = useSelector(state => state.user);
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    return(
        <div className="checkout-container">
            <div>
                <p className="checkout-page-title">Método de entrega: <br></br></p>
                <select className="checkout-select" name="delivery">
                    <option value="sedex10">SEDEX-10</option>
                    <option value="PAC">PAC</option>
                    <option value="fedex">FedEx</option>
                    <option value="sedex">SEDEX</option>
                    <option value="pacmini">PAC Mini</option>
                </select>
                <p className="checkout-page-title">Endereço para entrega: <br></br> </p>
                <input className="checkout-input"
                            type="text" 
                            placeholder="Endereço de entrega"
                         required></input>
                <p className="checkout-page-title">Método de Pagamento: <br></br> </p>
                <select className="checkout-select" name="payment" id="payment">
                    <option value="visa">Cartão de crédito VISA</option>
                    <option value="mastercard">Cartão de crédito MasterCard</option>
                    <option value="american">Cartão de crédito American Express</option>
                </select>
                <br></br>
                <input id="card" className="checkout-input-card"
                            type="text" 
                            placeholder="Número do Cartão de crédito"
                         required></input>
                <input id="cvv" className="checkout-input-cvv"
                            type="text"
                            placeholder="CVV"
                         required></input>
            </div>

            <Link to="/">
                <button className="checkout-page-button" onClick={() => {
                    purchaseRequest(user, cart).then((success) => {
                        if (success) dispatch(clearCart())
                    })
                }}>Finalizar a Compra</button>
            </Link>
        </div>
    )
};

export default Checkout;