import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../store/reducers/cartReducer";

import "../css/Checkout.css"

const Checkout = () => {

    const dispatch = useDispatch();

    return(
        <div className="checkout-container">
            <div>
                <p className="checkout-page-title">Método de entrega: <span className="checkout-page-text">SEDEX-10</span></p>
                <p className="checkout-page-title">Endereço para entrega: <span className="checkout-page-text">Rua Vladimir Adolfo dos Santos 526</span></p>
                <p className="checkout-page-title">Método de Pagamento: <span className="checkout-page-text">Cartão de crédito - VISA</span></p>
            </div>
            <Link to="/">
                <button className="checkout-page-button" onClick={() => {
                    dispatch(clearCart())
                    window.alert("Compra efetuada com sucesso.")
                }}>Finalizar a Compra</button>
            </Link>
        </div>
    )
};

export default Checkout;