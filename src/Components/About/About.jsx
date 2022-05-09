import React from "react";
import "./about.css";
import ME from "../../Image/Itamar Portrait-3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h2 style={{ fontSize: "50px" }}>About the Site</h2>

      <div className="container about__container ">
        <div className="about__me"></div>

        <div className="about__content">
          Here you could find Original Royelty music for your videos,
          commercials,Podcast or youtube videos. By clicking on the Products
          page you can listen to all kind of diffrent style of music and with a
          simple click it will be sent to your email account. This site was
          built by me using React and Java Script.
        </div>

        {/* <a href="#contact" className="btn btn-primary">
          Lets Talk
        </a> */}
      </div>
      {/* </div> */}
    </section>
  );
};

export default About;
