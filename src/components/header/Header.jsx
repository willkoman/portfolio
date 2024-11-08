import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "../../assets/will.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    
    <header>
      
      <section id="header">
        <div className="wavestop wavespantop"> </div>
        <div className="container header__container">
          <h3>Heyo, I'm</h3>
          <h1>Will Krasnov</h1>
          <h5 className="text-light">Game Developer and Full Stack Engineer</h5>
          <CTA />
          <div className="me">
            <img src={Me} alt="Will Krasnov" />
          </div>
          <HeaderSocials />
          
          <a href="#contact" className="scroll__down">
            Scroll Down
          </a>
          
        </div>
      </section>
    </header>
  );
};

export default Header;
