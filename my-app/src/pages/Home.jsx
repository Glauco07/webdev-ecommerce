import React from "react";

import Product from "../components/Product";
import "../css/Home.css";

import antipulgas from "../img/antipulgas.png"
import tapete from "../img/tapete-carvao.png"
import cama from "../img/cama-casinha.png"
import medicamento from "../img/medicamento-cyclavance.png"
import racao from "../img/racao-golden-duo.png"
import bolas from "../img/bolas-pelucia.png"

const Home = () => {
  const destaques = [
    {text: "Shampoo Ibasa Anti Pulgas", price: 30.99, image: antipulgas, id: '6243563'},
    {text: "Tapete Higiênico Carvão Ativado", price: 105.99, image: tapete, id: '61565'},
    {text: "Cama-Casinha 'Bonito pra Cachorro'", price: 329.99, image: cama, id: '26541651'},
    {text: "Medicamento Cyclavance para Cães", price: 331.99, image: medicamento, id: '2351320105'},
    {text: "Ração Golden Duo para Gatos Adultos", price: 62.90, image: racao, id: '64835213581'},
    {text: "Brinquedo de Pelúcia Chalesco Bola", price: 20.79, image: bolas, id: '9135132151'}
  ]

  return (
    <section className="destaques">      
      <h1>Destaques</h1>
      <div className="destaques-container">
        {destaques.map((product) => <Product text={product.text} price={product.price} image={product.image} id={product.id} key={product.id}/>)}
      </div>
    </section>
  )
};

export default Home;