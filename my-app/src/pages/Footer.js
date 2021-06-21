import React from "react";
import faceLogo from "../img/face-logo.png";
import instaLogo from "../img/instagram-logo.png";
import linkedinLogo from "../img/linkedin-logo.png";
import telefoneLogo from "../img/telefone-logo.png";
import emailLogo from "../img/email-logo.png";
import "../css/Footer.css";

const Footer = () => {
    return(
        <div class='container-footer'>


            <div class='container-footer-social'>
                <div>
                    Nos siga nas redes Sociais
                </div>
                <div class='container-footer-social-icon'>
                    <div>
                        <img src={faceLogo} alt="logo" width="50px" heigth="50px" ></img>
                    </div>
                    <div>
                        <img src={instaLogo} alt="logo" width="50px" heigth="50px" ></img>
                    </div>
                    <div>
                        <img src={linkedinLogo} alt="logo" width="50px" heigth="50px" ></img>
                    </div>
                </div>
            </div>


            <div class='container-footer-address-info'>
                Rua das Amélias, Jardim Novo Oriente, 41-SP<br/>
                11550-321
            </div>


            <div class='container-footer-contact'>
                <div>
                    Entre em contato
                </div>
                <div>
                    <div>
                        <img src={telefoneLogo} alt="logo" width="50px" heigth="50px" ></img>
                    </div>
                    (11) 3933-2731
                </div>
                <div>
                    <div>
                        <img src={emailLogo} alt="logo" width="50px" heigth="50px" ></img>
                    </div>
                    cigas@fuca.com
                </div>
            </div>
        </div>
    )
};

export default Footer;