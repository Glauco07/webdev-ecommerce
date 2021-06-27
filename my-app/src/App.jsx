import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./pages/Login"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import User from "./pages/User";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import ListProducts from "./pages/ListProducts";


const App = () => {
  const alimentos = [
    {text: "Ração Royal Canin Maxi", price: 270.18, image: 'antipulgas'},
    {text: "Ração Royal Canin Bulldog", price: 266.78, image: 'tapete'},
    {text: "Ração Royal Canin Veterinary Hypoallergic", price: 121.48, image: 'cama'},
    {text: "Ração Úmida Royal Canin Sachê", price: 7.89, image: 'medicamento'},
    {text: "Ração Golden Duo para Gatos Adultos", price: 62.90, image: 'racao'},
    {text: "Ração Premier Fórmula Senior", price: 209.99, image: 'bolas'}
  ]

  const brinquedos = [
    {text: "Brinquedo Macaco Petz", price: 39.99, image: 'antipulgas'},
    {text: "Tunel Petz para Gatos", price: 99.99, image: 'tapete'},
    {text: "Bolinha Crocante", price: 49.99, image: 'cama'},
    {text: "Brinquedo Gira dog Chalesco", price: 82.99, image: 'medicamento'},
    {text: "Túnel refrescante Chalesco", price: 164.99, image: 'racao'},
    {text: "Brinquedo de Pelúcia Chalesco Bola", price: 20.79, image: 'bolas'}
  ]

  const casinhas = [
    {text: "Casa Ferplast Kenny", price: 299.99, image: 'antipulgas'},
    {text: "Dogvilla Ferplast para Cães", price: 999.99, image: 'tapete'},
    {text: "Cama-Casinha 'Bonito pra Cachorro'", price: 329.99, image: 'cama'},
    {text: "Casa Iglu Furacão Pet", price: 68.39, image: 'medicamento'},
    {text: "Casa DuraPets Dura House", price: 99.99, image: 'racao'},
    {text: "Casa Idealdog Pop House", price: 199.99, image: 'bolas'}
  ]

  const remedios = [
    {text: "Apoquel Zoetis Dermatológico", price: 199.99, image: 'antipulgas'},
    {text: "Antipulgas e Carrapatos Bravecto MSD", price: 204.99, image: 'tapete'},
    {text: "Agemoxi CL 250mg Antibiótico", price: 99.99, image: 'cama'},
    {text: "Medicamento Cyclavance para Cães", price: 331.99, image: 'medicamento'},
    {text: "Dermogen Shampoo 500ml", price: 120.99, image: 'racao'},
    {text: "Ball Free Suplemento para Gatos", price: 57.99, image: 'bolas'}
  ]

  const alimentosDesc = "Os amantes de pets devem fazer o possível para garantir a saúde e qualidade de vida dos seus animais de estimação. Pensando nisso, oferecer uma ração rica em componentes nutritivos é imprescindível a fim de garantir todo o bem-estar e felicidade dos seus pets."
  const remediosDesc = "Mesmo com todos os cuidados que proporcionamos para os seus animais, pode acontecer de eles ficarem doentes ou terem a necessidade de suplementos. Nesse caso, só uma alimentação balanceada não é suficiente, sendo necessário recorrer a opções como os medicamentos mais adequados."
  const casinhasDesc = "É importante oferecermos um cantinho especial da casa para nossos animaizinhos. Assim, após um dia de divertidas brincadeiras e atividades, nossos pets podem descansar e repor suas energias. Para garantir um lugar tranquilo para o peludo, adquira uma ótima casinha."
  const brinquedosDesc = "Todos os pets precisam de uns brinquedinhos para se divertirem, com os seus donos ou mesmo sozinhos. Adquira os melhores brinquedos aqui."

  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/alimentos">
            <ListProducts products={alimentos} title={"Alimentos para o seu pet"} desc={alimentosDesc}/>
          </Route>
          <Route path="/brinquedos">
            <ListProducts products={brinquedos} title={"Brinquedos para o seu pet"} desc={brinquedosDesc}/>
          </Route>
          <Route path="/remedios">
            <ListProducts products={remedios} title={"Remédios para o seu pet"} desc={remediosDesc}/>
          </Route>
          <Route path="/casinhas">
            <ListProducts products={casinhas} title={"Casas para o seu pet"} desc={casinhasDesc}/>
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;