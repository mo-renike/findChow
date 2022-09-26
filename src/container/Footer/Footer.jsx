import React from 'react';
import { AiFillPhone, AiFillMail, AiFillGithub, AiFillLinkedin, AiFillCodepenCircle, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { SubHeading } from '../../components/Headings/Headings';

import './Footer.scss';

const Footer = () => (
  <div className='footer' id="contact">
    <div className="footer__address">
      <SubHeading title="Contact Me" />
      {/* <p><i class="fa fa-map-marker" aria-hidden="true"></i> Lagos Nigeria</p> */}
      <a href="mailto:herroyalpianist@gmail.com"><AiFillMail /> Send a mail </a> <br />
      <a href="tel:+2348099772916"> <AiFillPhone /> Call +234 809 977 2916</a>
    </div>

    <div className="footer__socials">
      <a href="https://github.com/mo-renike"><AiFillGithub /></a>
      <a href="https://codepen.io/herroyalpianist"><AiFillCodepenCircle /></a>
      <a href="https://twitter.com/mo_renike_"><AiOutlineTwitter /></a>
      <a href="https://www.instagram.com/herroyalpianist/"><AiFillInstagram /></a>
      <a href="https://www.linkedin.com/in/morenike-oyewole/"><AiFillLinkedin /></a>

    </div>
    <div className="footer__copy">
      Designed and Developed by <a href="https://github.com/mo-renike"> Morenike</a>
    </div>
  </div>
);

export default Footer;
