import React from "react";
import "./header.css";
import LOGO from "../../assents/Logo_IM_1.png";
import About from "../About/About";
import Contact from "../Contact/Contact";

const Header = () => {
  return (
    <div>
      <section id="head">
        <header className="header">
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

            {/* <a href="#contact" className="scroll__down">
              {" "}
              Scroll Down
            </a> */}
          </div>
        </header>
      </section>

      <About />
      <Contact />
    </div>
  );
};

export default Header;
