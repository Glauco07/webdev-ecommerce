import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/reducers/cartReducer";

import "../css/Product.css";


const Product = ({text, price, image, id=''}) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()
    return (
      <div className="destaques-wrapper">
        <div className="destaques-container-item">
          <img className="imagem" src={image} alt="Produto"></img>
          <span className="texto">{text}</span><br></br>
          <div style={{"display": "flex","justifyContent":"center"}}>
            <span className="preco">R$ {Number(price).toFixed(2).toString().replace(".", ",")}</span>
          </div>
        </div>

        <div className="buy-and-cart">
          <input className="quantity" type="number" min="1" max="99" value={quantity} onChange={(e) => {setQuantity(e.target.value)}}></input>
          <div className="add-to-cart-div">
            <button className="add-to-cart" onClick={() => {dispatch(addProduct(text,price,Number(quantity),id))}}>Comprar</button>
          </div>
        </div>
      </div>
    )
}

export default Product;