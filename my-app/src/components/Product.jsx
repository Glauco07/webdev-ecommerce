import React from "react";

const opts = { minimumFractionDigits: 2 };

const Product = ({text,price,image}) => {
    return (
      <div className="destaques-container-item">
        <img className="imagem" src={image} alt="Produto"></img>
        <span className="texto">{text}</span><br></br>
        <span className="preco">R$ {Number(price).toFixed(2).toString().replace(".", ",")}</span>
      </div>
    )
}

export default Product;