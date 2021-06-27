import React from "react";
import Product from "../components/Product";
import balls from "../img/bolas-pelucia.png";

import "../css/ListProducts.css"

const ListProducts = (props) => {
    return (
        <div id="main-content">
            <section>
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <div id="products-container">
                    {props.products.map((product) => <Product text={product.text} price={product.price} image={balls}/>)}
                    {props.products.map((product) => <Product text={product.text} price={product.price} image={balls}/>)}
                    {props.products.map((product) => <Product text={product.text} price={product.price} image={balls}/>)}
                </div>
            </section>
        </div>
    )
}

export default ListProducts;