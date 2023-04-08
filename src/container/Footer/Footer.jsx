import React from "react";
import { FaArrowUp } from "react-icons/fa";
// import {
//   AiFillMail,
//   AiFillGithub,
//   AiFillLinkedin,
//   AiFillCodepenCircle,
//   AiFillInstagram,
//   AiOutlineTwitter,
//   AiOutlineWhatsApp,
// } from "react-icons/ai";

import "./Footer.scss";

const Footer = ({ count }) => (
  <div className="footer" id="contact">
    <div className="footer__copy">
      <h2> Find Chow </h2> <br />
      <p> hotels.ng but for food </p>
      <a href="http://morenike.ninja" target="_blank" rel="noopener noreferrer">Hire Me</a>
      <p> &copy; {new Date().getFullYear()}. All rights reserved</p>
      <span>Page Visits: {count}</span>{" "}
      <a className="footer__top" href="/#home">
        <FaArrowUp />
      </a>
    </div>
  </div>
);

export default Footer;