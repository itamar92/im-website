import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artical className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>itamar92@gmail.com</h5>
            <a href="mailto:itamar92@gmail.com" target="_blank">
              {" "}
              Send a message
            </a>
          </artical>
          <artical className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Itamar Miron</h5>
            <a href="http://m.me/itamar.miron" target="_blank">
              {" "}
              Send a message
            </a>
          </artical>
          <artical className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+972-526837081</h5>
            <a
              href="http://api.whatsapp.com/send?phone+9726837081"
              target="_blank"
            >
              {" "}
              Send a message
            </a>
          </artical>
        </div>
        <form className="contact__form" action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
