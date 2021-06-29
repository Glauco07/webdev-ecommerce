import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../store/reducers/cartReducer";

const Checkout = () => {

    const dispatch = useDispatch();

    return(
        <div>
            <div>
                <p>Método de entrega</p>
                <p>Endereço para entrega</p>
                <p>Método de Pagamento</p>
            </div>
            <Link to="/">
                <button onClick={() => {dispatch(clearCart())}}>Finalizar a Compra</button>
            </Link>
        </div>
    )
};

export default Checkout;