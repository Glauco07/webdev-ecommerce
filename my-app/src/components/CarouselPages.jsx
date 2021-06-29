import React from "react";

import casa from "../img/casa-cachorro.png"
import cama from "../img/cama-casinha.png"
import pedigree from "../img/pedigree.png"
import dog from "../img/dog.jpeg"
import bolas from "../img/bolas-pelucia.png"
import sadcat from "../img/sadcat.png"

import "../css/Slider.css"

const CarouselPages = ({ placeholder }) => {
    return (
        <div id="slider-container">
            <div>
                <img className="slider-main-image" src={placeholder ? sadcat : dog} alt="cama" height="200px"/>
            </div>

            <section>
                    <h1 style={{"margin": "0", "fontSize": "42px"}}>{placeholder ? "Tudo para o seu gato" : "Tudo para o seu cachorro"}</h1>
                    <h2 style={{"color": "#47525E", "marginTop": "10px", "fontSize": "26px"}}>Aqui você encontra os melhores preços</h2>
            </section>

            <div className="slider-images">
                <img src={placeholder ? bolas : cama} alt={placeholder ? "bolas" : "cama"} width="28%"></img>
                <img src={placeholder ? bolas : pedigree} alt={placeholder ? "bolas" : "pedigree"} width="16%"></img>
                <img src={placeholder ? bolas : casa} alt={placeholder ? "bolas" : "casa"} width="28%"></img>
            </div>
        </div>
    )
}

export default CarouselPages;