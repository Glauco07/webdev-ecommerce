import React, { useState} from "react";
import { connect } from "react-redux";
import Product from "../components/Product";
import balls from "../img/bolas-pelucia.png";

import "../css/ListProducts.css"

const ListProducts = ({title, desc, category='', products}) => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('searchTerm');

    return (
        <div id="main-content">
            <section>
                <h2>{title}</h2>
                <span>{desc}</span>
                <div id="products-container">
                    {products.filter((product) => {
                        if (category !== '' ) return product.category === category ? product : undefined
                        else if (searchTerm !== '' && (product.category.toLowerCase().includes(searchTerm.toLowerCase()) || product.text.toLowerCase().includes(searchTerm.toLowerCase()))) {
                            return product
                        }
                        return undefined
                    }).map((product) => <Product text={product.text} price={product.price} image={balls} id={product._id} key={product._id}/>)}
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.list,
    }
}

export default connect(mapStateToProps, null)(ListProducts);