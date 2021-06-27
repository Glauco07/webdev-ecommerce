import React from "react";

import "../css/About.css";
import lola from "../img/lola.jpg"

const About = () => {
  return (
    <div id="about">
        <p>Nossa loja tem o compromisso de fornecer produtos variados da mais alta qualidade para a conveniência sua e do seu pet.</p>
        <img src={lola} alt="lola" height={'400px'}></img>
        <h3>Fique ligado!</h3>
        <p>No futuro, ainda planejamos oferecer os melhores serviços de banho e tosa para mimar o seu pet!</p>
    </div>
  )
};

export default About;