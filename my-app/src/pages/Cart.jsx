import React from "react";
import { useSelector } from "react-redux";
import "../css/Cart.css";
import CartItem from "../components/CartItem"
import sadcat from "../img/sadcat.png"

const Cart = () => {
    const cart = useSelector(state => state.cart)
    
    if (cart.products.length === 0) {
        return (
            <div id="cart-page-empty">
                <span>Seu carrinho está vazio </span>
                <img src={sadcat} alt="Sad Cat" height="300" width="300"></img>
            </div>
        )
    }

    return (
        <div id="cart-page">
            <div id="payment">
                <div>
                    <table>
                        <thead>
                            <tr className="cart-page-text-title">
                                <th className="meu-carrinho">Meu Carrinho</th>
                                <th length="340px"></th>
                                <th className="preco-carrinho">Preço</th>
                                <th width="155px">Quantidade</th>
                                <th width="115px">Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {cart.products.map((product) => <CartItem text={product.text} price={product.price} quantity={product.quantity} id={product.id}/>)}
                        </tbody>
                    </table>
                </div>

                <div className="checkout">
                    <span className="checkout-text">Total: </span>
                    <div className="checkout-number">
                        <span className="checkout-number">R$ {cart.totalPrice.toFixed(2).toString().replace(".", ",")}</span>
                    </div>
                    <button className="checkout-button">Checkout</button>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;