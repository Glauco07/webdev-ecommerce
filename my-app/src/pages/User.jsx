import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import OrderHistory from "../components/OrderHistory";
import { signoutUser } from "../store/reducers/userReducer";
import { mockedProducts } from "../mockedDatabase";

import "../css/User.css"


const showAlert = (x) => {
  x ? window.alert("Produto adicionado com sucesso.") : window.alert("Administrador adicionado com sucesso.")
}

const User = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch()
  const [showSection, setShowSection] = useState("");

  const userID = user.user === 'admin' ? '' : user.id
  return (
    <div className="user-page-container">
      <h1>Bem-vindo(a), {user.name}</h1>
      <div className="user-page-inner">
        <p className="user-page-title">Email: <span className="user-page-text">{user.email}</span></p>
        <p className="user-page-title">Cidade: <span className="user-page-text">{user.city}</span></p>
        <p className="user-page-title">Tipo: <span className="user-page-text">{user.type}</span></p>
        <Link to="/">
          <button className="sign-out" onClick={()=>{dispatch(signoutUser())}}>Sign Out</button>
        </Link>
        <OrderHistory userId={userID}/>
        {user.user === 'admin' ?
          <div className="user-admin">
            <button className="user-admin-button" onClick={() => {setShowSection(showSection === "Product" ? "" : "Product")}}>Gerenciar produtos</button>
            <button className="user-admin-button" onClick={() => {setShowSection(showSection === "Admin" ? "" : "Admin")}}>Gerenciar admins</button>
            {showSection === "Product" ?
              <div style={{"marginBottom": "30px"}}>
                <p className="admin-products-title">Produtos</p>
                <div style={{"marginBottom": "30px"}}>
                  <input className="input-field-user" type="text" placeholder="Nome do Produto"></input>
                  <input className="input-field-user" type="number" placeholder="Preço"></input>
                  <input className="input-field-user" type="text" placeholder="Categoria"></input>
                  <input className="input-field-user" type="number" placeholder="Estoque"></input>
                  <button className="user-admin-button" onClick={() => showAlert(true)}>Adicionar produto</button>
                </div>
                <div className="admin-products-container">
                  {mockedProducts.map((product) =>
                    <div className="admin-product-item" key={product.id}>
                      <span className="user-page-product-name">Nome: {product.text} </span>
                      <span className="user-page-product-name"> ID: {product.id} </span>
                      <span className="user-page-product-name"> Price: R$ {product.price.toFixed(2).toString().replace(".", ",")} </span>
                      <span className="user-page-product-name"> Categoria: {product.category} </span>
                      <span className="user-page-product-name"> Estoque: {product.storage} </span>
                      <button className="admin-remove-product"> Remover Produto</button>
                    </div>
                  )}
                </div>
                
              </div>
            :
              <></>
            }
            {showSection === "Admin" ? 
              <div>
                <p className="admin-products-title"> Usuários</p>
                <input className="input-field-user" type="text" placeholder="Usuário"></input>
                <button className="user-admin-button" onClick={() => showAlert(false)}>Add Admin</button>
              </div>
            :
              <></>
            }
          </div>
        :
          <></>
        }
      </div>
    </div>
  )
};

export default User;