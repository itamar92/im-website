import React from "react";
import "./header.css";
import LOGO from "../../Image/Logo_IM_1.png";
import HeaderSocial from "./HeaderSocial";
import About from "../About/About";

const Header = () => {
  return (
    <div>
      <header className="header">
        <section id="head">
          <div className="container header__container">
            <div>
              <h1 className="header__title">
                {" "}
                Get royalty free music for your Videos
              </h1>
              <h2 className="text-light">
                {" "}
                Original music | High quality | Various Styls
              </h2>
            </div>

            <div className="logo">
              <img src={LOGO} alt="logo" />
            </div>

            <a href="#contact" className="scroll__down">
              {" "}
              Scroll Down
            </a>
          </div>
        </section>
      </header>
      <About />
    </div>
  );
};

export default Header;
