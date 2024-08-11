import React from "react";
import { FaArrowUp } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__wrapper">
        <div className="footer__wrapper_copy">
          <h2> FindChow </h2>
          <p>Find food spots in your area</p>
          <a
            href="https://portfolio-morenikes-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact the Developer
          </a>
          <p style={{ opacity: '.5' }}> &copy; {new Date().getFullYear()}. All rights reserved</p>
          {/* <span>Page Visits: {count}</span>{" "} */}
          <a className="footer__top" href="/#home">
            <FaArrowUp />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Footer;
