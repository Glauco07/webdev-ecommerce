import React, { useState } from "react";
import { connect  } from "react-redux";
import { Link } from "react-router-dom";

import { loginUser, addUser } from "../store/reducers/userReducer";
import "../css/Login.css"

const Login = ({loginUser, addUser}) => {
    const [user, setUser] = useState("");
    const [pswd, setPswd] = useState("");
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [showCreateAcc, setShowCreateAcc] = useState(false);

    return (
        <div id="login-container">
            <div id="make-login" className="half-page">
                <span className="login-text-title">Faça seu login</span><br></br>
                <div>
                    <span className="login-password-text">Login</span><br></br>
                <div id="login-user">
                    <input 
                            className="login-input" 
                            type="text" 
                            placeholder="Nome de usuário" 
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        ></input><br></br>
                    </div>
                </div>
                
                <div id="login-password">
                    <span className="login-password-text">Senha</span><br></br>
                    <input 
                        className="login-input" 
                        type="password" 
                        placeholder="**********" 
                        value={pswd} 
                        onChange={(e) => setPswd(e.target.value)}
                    ></input><br></br>
                </div>
                <Link to="/user">
                    <button className="login-button" onClick={() => loginUser(user, pswd)}>Fazer login</button>
                </Link>
            </div>

            <div id="division"></div>

            <div id="create-account" className="half-page">
                {showCreateAcc ? 
                    <div style={{"display": "flex", "flexDirection": "column"}}>
                        <p class="create-account-title">Crie sua conta</p>
                        <input
                            onChange={(e) => setUser(e.target.value)}
                            class="create-account-input"
                            type="text" 
                            placeholder="Usuário"
                         required></input>
                        <br></br>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            class="create-account-input"
                            type="text" 
                            placeholder="Nome Completo"
                         required></input>
                        <br></br>
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                            class="create-account-input"
                            type="text" 
                            placeholder="Endereço de e-mail"
                         required></input>
                        <br></br>
                        <input
                        onChange={(e) => setCity(e.target.value)}
                            class="create-account-input" 
                            type="test" 
                            placeholder="Cidade" 
                         required></input>
                        <br></br>
                        <input 
                            onChange={(e) => setPswd(e.target.value)}
                            class="create-account-input" 
                            type="password" 
                            placeholder="Senha"
                         required></input>
                        <br></br>
                        <Link to="/user">
                            <button class="login-button" onClick={()=>addUser(user, name, city, email, pswd)}>Crie sua conta</button>
                        </Link>
                    </div>
                    :
                    <>
                        <span className="login-text-title">Ainda não tem cadastro?</span>
                        <button className="login-button" onClick={() => {setShowCreateAcc(true)}}>Criar conta</button>
                    </>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps, {loginUser, addUser})(Login);