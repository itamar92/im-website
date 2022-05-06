import React from "react";
import "./about.css";
import ME from "../../Image/Itamar Portrait-3.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      {/* <h5>Get To Know</h5> */}
      <h2 style={{ fontSize: "50px" }}>About the Site</h2>

      <div className="container about__container ">
        <div className="about__me">
          {/* <div className="about__me-image">
            <img src={ME} alt="Itamar-Image" />
          </div> */}
        </div>

        {/* <div className="about__content">
          <div className="about__cards">
            <p className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small> 3+ Years Working </small>
            </p>

            <p className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small> 200+ Worldwide </small>
            </p>

            <p className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small> 80+ Completed </small>
            </p>
          </div> */}

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
