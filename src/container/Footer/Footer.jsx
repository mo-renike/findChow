import React from 'react';
import { SubHeading } from '../../components/Headings/Headings';

import './Footer.scss';

const Footer = () => (
  <div className='footer' id="contact">
    <div className="footer__address">
      <SubHeading title="Contact Me" />
      {/* <p><i class="fa fa-map-marker" aria-hidden="true"></i> Lagos Nigeria</p> */}
      <a href="mailto:herroyalpianist@gmail.com"><i class="fa fa-envelope"></i> Send a mail </a> <br />
      <a href="tel:+2348099772916"> <i class="fa fa-phone"></i> Call +234 809 977 2916</a>
    </div>

    <div className="footer__socials">
      <a href="https://github.com/mo-renike"><i class="fa fa-github"></i></a>
      <a href="https://codepen.io/herroyalpianist"><i class="fa fa-codepen"></i></a>
      <a href="https://twitter.com/Mo_inspired_"><i class="fa fa-twitter"></i></a>
      <a href="https://www.instagram.com/mo_inspired_/"><i class="fa fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/oyewole-morenike-572104120/"><i class="fa fa-linkedin"></i></a>

    </div>
    <div className="footer__copy">
      Designed and Developed by <a href="https://github.com/mo-renike"> Morenike</a>
    </div>
  </div>
);

export default Footer;
