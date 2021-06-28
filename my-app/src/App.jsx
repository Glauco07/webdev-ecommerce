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
            <ListProducts title={"Alimentos para o seu pet"} desc={alimentosDesc} category={'Alimentos'}/>
          </Route>
          <Route path="/brinquedos">
            <ListProducts title={"Brinquedos para o seu pet"} desc={brinquedosDesc} category={'Brinquedos'}/>
          </Route>
          <Route path="/remedios">
            <ListProducts title={"Remédios para o seu pet"} desc={remediosDesc} category={'Remédios'}/>
          </Route>
          <Route path="/casinhas">
            <ListProducts title={"Casas para o seu pet"} desc={casinhasDesc} category={'Casinhas'}/>
          </Route>
          <Route path="/busca">
            <ListProducts title={"Encontre seu produto"} desc={''} category={''}/>
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