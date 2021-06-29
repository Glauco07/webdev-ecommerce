import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { Link } from "react-router-dom";

import { loginUser } from "../store/reducers/userReducer";
import "../css/Login.css"

const Login = () => {
    const [user, setUser] = useState("");
    const [pswd, setPswd] = useState("");
    const [showCreateAcc, setShowCreateAcc] = useState(false);

    const dispatch = useDispatch();

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
                    <button className="login-button" onClick={() => {dispatch(loginUser(user,pswd))}}>Fazer login</button>
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
                            placeholder="Nome de usuário"
                        ></input>
                        <br></br>
                        <input
                            class="create-account-input"
                            type="text" 
                            placeholder="Endereço de e-mail"
                        ></input>
                        <br></br>
                        <input 
                            onChange={(e) => setPswd(e.target.value)}
                            class="create-account-input" 
                            type="password" 
                            placeholder="Senha"
                        ></input>
                        <br></br>
                        <input 
                            class="create-account-input" 
                            type="password" 
                            placeholder="Confirme sua senha" 
                        ></input>
                        <br></br>
                        <Link to="/user">
                            <button class="login-button" onClick={() => {dispatch(loginUser(user,pswd))}}>Crie sua conta</button>
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

export default Login;