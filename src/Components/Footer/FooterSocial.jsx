import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { GrSoundcloud } from "react-icons/gr";
import "./footer.css";

const FooterSocial = () => {
  return (
    <div className="footer__socials">
      <a
        href="https://www.linkedin.com/in/itamar-miron-848753125"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/itamar92" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/imusicproductions" target="_blank">
        <IoLogoFacebook />
      </a>
      <a href="https://soundcloud.com/itamarmiron" target="_blank">
        <GrSoundcloud />
      </a>
    </div>
  );
};

export default FooterSocial;
