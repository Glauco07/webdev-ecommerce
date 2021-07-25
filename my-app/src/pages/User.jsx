import React, {useState} from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { Link } from "react-router-dom";

import OrderHistory from "../components/OrderHistory";
import { signoutUser, addAdmin } from "../store/reducers/userReducer";
import { addProduct, removeProduct } from "../store/reducers/productsReducer";

import "../css/User.css"


const User = ({products, addProduct, removeProduct, addAdmin}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [storage, setStorage] = useState("");
  const [admin, setAdmin] = useState("");

  const user = useSelector(state => state.user);
  const dispatch = useDispatch()
  const [showSection, setShowSection] = useState("");

  return (
    <div className="user-page-container">
      
      {user._id !== '' ? <>
        <h1>Bem-vindo(a), {user.name}</h1>
        <div className="user-page-inner">
          <p className="user-page-title">Email: <span className="user-page-text">{user.email}</span></p>
          <p className="user-page-title">Cidade: <span className="user-page-text">{user.city}</span></p>
          <p className="user-page-title">Admin: <span className="user-page-text">{user.admin ? "Sim" : "Não"}</span></p>
          <Link to="/">
            <button className="sign-out" onClick={()=>{dispatch(signoutUser())}}>Sign Out</button>
          </Link>
          <OrderHistory user={user}/>
          {user.admin ?
            <div className="user-admin">
              <button className="user-admin-button" onClick={() => {setShowSection(showSection === "Product" ? "" : "Product")}}>Gerenciar produtos</button>
              <button className="user-admin-button" onClick={() => {setShowSection(showSection === "Admin" ? "" : "Admin")}}>Gerenciar admins</button>
              {showSection === "Product" ?
                <div style={{"marginBottom": "30px"}}>
                  <p className="admin-products-title">Produtos</p>
                  <div style={{"marginBottom": "30px"}}>
                    <input  className="input-field-user" type="text" placeholder="Nome do Produto" onChange={(e) => setName(e.target.value)}></input>
                    <input className="input-field-user" type="number" placeholder="Preço" onChange={(e) => setPrice(e.target.value)}></input>
                    <input className="input-field-user" type="text" placeholder="Categoria" onChange={(e) => setCategory(e.target.value)}></input>
                    <input className="input-field-user" type="number" placeholder="Estoque" onChange={(e) => setStorage(e.target.value)}></input>
                    <button className="user-admin-button" onClick={() => addProduct(name, Number(price), category, "balls", Number(storage))}>Adicionar produto</button>
                  </div>
                  <div className="admin-products-container">
                    {products.map((product) =>
                      <div className="admin-product-item" key={product._id}>
                        <span className="user-page-product-name">Nome: {product.text} </span>
                        <span className="user-page-product-name"> ID: {product._id} </span>
                        <span className="user-page-product-name"> Price: R$ {product.price.toFixed(2).toString().replace(".", ",")} </span>
                        <span className="user-page-product-name"> Categoria: {product.category} </span>
                        <span className="user-page-product-name"> Estoque: {product.storage} </span>
                        <button className="admin-remove-product" onClick={() => removeProduct(product._id)}> Remover Produto</button>
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
                  <input id= "add-admin-button" className="input-field-user" type="text" onChange={(e) => setAdmin(e.target.value)} placeholder="Usuário"></input>
                  <button className="user-admin-button" onClick={() => {
                    addAdmin(admin);
                    document.getElementById("add-admin-button").value = ""
                  }}>Add Admin</button>
                </div>
              :
                <></>
              }
            </div>
          :
            <></>
          }
        </div>
      </>
      :
      <p>Voce Precisa estar logado</p>}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
      products: state.products.list,
  }
}

export default connect(mapStateToProps,{addProduct, removeProduct, addAdmin})(User);