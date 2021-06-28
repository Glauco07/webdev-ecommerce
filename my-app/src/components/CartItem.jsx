import React from "react";
import trash from "../img/trash-bin.png"
import { useDispatch } from "react-redux";
import { removeProduct } from "../store/reducers/cartReducer";
import image from "../img/bolas-pelucia.png"


const CartItem = ({text, price, quantity, id}) => {
    const dispatch = useDispatch();

    return (
        <tr>
            <td className="cart-image">
                <img src={image} alt="product" height="76px"></img>
            </td>
            <td className="cart-item-description" max-length="300px"><span>{text}</span></td>
            <td>R$ {price.toFixed(2).toString().replace(".", ",")}</td>
            <td className="carrinho-quantidade">{quantity}</td>
            <td>R$ {(quantity * price).toFixed(2).toString().replace(".", ",")}</td>
            <td>
                <img className="trash-icon" src={trash} alt="Lixeira" height="22px" onClick={()=>{dispatch(removeProduct(id))}}></img>
            </td>
        </tr>
    )
}

export default CartItem;