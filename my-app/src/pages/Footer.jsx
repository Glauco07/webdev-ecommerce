import React from "react";
import faceLogo from "../img/face-logo.png";
import instaLogo from "../img/instagram-logo.png";
import tiktokLogo from "../img/tiktok-logo.png";
import linkedinLogo from "../img/linkedin-logo.png";
import twitterLogo from "../img/twitter-logo.png";
import telefoneLogo from "../img/telefone-logo.png";
import emailLogo from "../img/email-logo.png";
import "../css/Footer.css";

const Footer = () => {
    return(
        <footer className="container-footer">
            <div className="container-footer-social">
                <div id="follow">Nos siga nas redes Sociais</div>

                <div className="container-footer-social-icon">
                    <img src={faceLogo} alt="face" width="53px" height="53px"></img>
                    <img src={instaLogo} alt="insta" width="51px" height="51px"></img>
                    <img className="space-icons" src={tiktokLogo} alt="tiktok" width="50px" height="50px"></img>
                    <img className="space-icons" src={linkedinLogo} alt="linkedin" width="45px" height="45px"></img>
                    <img className="space-icons" src={twitterLogo} alt="twitter" width="46x" height="46x"></img>
                </div>
            </div>

            <div className="container-footer-address-info">
                Rua das Amélias, Jardim Novo Oriente, 41-SP<br/>
                11550-321
            </div>

            <div className="container-footer-contact">
                <div id="contact">Entre em contato</div>

                <div className="footer-info">
                    <img id="telefone" src={telefoneLogo} alt="telefone" width="52px" heigth="52px" ></img>
                    <span className="footer-info">(11) 3933-2731</span>
                </div>

                <div className="footer-info">
                    <img id="email" src={emailLogo} alt="email" width="43px" heigth="43px" ></img>
                    <span className="footer-info">cigas@fuca.com</span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;