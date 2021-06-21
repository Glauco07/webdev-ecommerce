import React from "react";
import "../css/Product.css";
import productDefault from "../img/product-default.png";

const Product = () => {
    return(
        <div class='container-product'>
            <div class='container-product-image'>   
                <img src={productDefault} alt="logo" width="320px" heigth="500px" ></img>
            </div>

            <div class='container-product-name'>
                Ração Golden Sabor Frango e Carne 
            </div>

            <div class='container-product-price'>
                R$ 129,90
            </div>
        </div>
    )
};

export default Product;