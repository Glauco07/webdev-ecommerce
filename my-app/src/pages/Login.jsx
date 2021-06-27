import React, {useEffect, useState} from "react";
import { useDispatch  } from "react-redux";

import { loginUser } from "../store/reducers/userReducer";
import "../css/Login.css"
import emailLogo from "../img/email-logo.png";

const Login = () => {
    const [user, setUser] = useState("");
    const [pswd, setPswd] = useState("");

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
                
                <button className="login-button" onClick={() => {dispatch(loginUser(user,pswd))}}>Fazer login</button>
            </div>

            <div id="division"></div>

            <div id="create-account" className="half-page">
                <span className="login-text-title">Ainda não tem cadastro?</span>
                <button className="login-button" onClick={() => {
                    const rightSide = document.getElementById("create-account")
                    rightSide.innerHTML = 
                    `<div>
                        <p class="create-account-title">Crie sua conta</p>
                        <!--<span class="create-account-text">Usuário</span>-->
                        <input 
                            class="create-account-input"
                            type="text" 
                            placeholder="Nome de usuário"
                        ></input><br></br>
                        <!--<span class="create-account-text">E-Mail</span>-->
                        <input
                            class="create-account-input"
                            type="text" 
                            placeholder="Endereço de e-mail"
                        ></input><br></br>
                        <!--<span class="create-account-text">Senha</span>-->
                        <input 
                            class="create-account-input" 
                            type="password" 
                            placeholder="Senha" 
                        ></input><br></br>
                        <!--<span class="create-account-text">Confirmar senha:</span>-->
                        <input 
                            class="create-account-input" 
                            type="password" 
                            placeholder="Confirme sua senha" 
                        ></input><br></br>
                        <button class="login-button">Crie sua conta</button>
                    </div>`

                    rightSide.style.justifyContent = "flex-start"
                }}>Criar conta</button>
            </div>
        </div>
    )
}

export default Login;