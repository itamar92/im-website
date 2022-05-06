import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
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
    </div>
  );
};

export default HeaderSocial;
