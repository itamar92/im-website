import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="http://facebooke.com" target="_blank">
        <IoLogoFacebook />
      </a>
    </div>
  );
};

export default HeaderSocial;
