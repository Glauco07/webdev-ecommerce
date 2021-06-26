import React from "react";
import "../css/Product.css";
import productDefault from "../img/product-default.png";

const Product = () => {
    return(
        <div className="container-product">
            <div className="container-product-image">   
                <img src={productDefault} alt="logo" width="320px" heigth="500px" ></img>
            </div>

            <div className="container-product-name">
                Ração Golden Sabor Frango e Carne 
            </div>

            <div className="container-product-price">
                R$ 129,90
            </div>
        </div>
    )
};

export default Product;