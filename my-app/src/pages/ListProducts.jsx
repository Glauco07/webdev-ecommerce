import React from "react";
import Product from "../components/Product";
import balls from "../img/bolas-pelucia.png";

import "../css/ListProducts.css"

const ListProducts = () => {
    return (
        <div id="products-container">
            <div id="products-container2">
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
                <Product text={"Titulo do produto"} price={"30.19"} image={balls}/>
            </div>
        </div>
    )
}

export default ListProducts;