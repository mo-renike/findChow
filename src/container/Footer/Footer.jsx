import React from "react";
// import {
//   AiFillMail,
//   AiFillGithub,
//   AiFillLinkedin,
//   AiFillCodepenCircle,
//   AiFillInstagram,
//   AiOutlineTwitter,
//   AiOutlineWhatsApp,
// } from "react-icons/ai";
// import { SubHeading } from "../../components/Headings/Headings";

import "./Footer.scss";

const Footer = () => (
  <div className="footer" id="contact">

    <div className="footer__copy">
      Designed by{" "}
      <a href="https://www.figma.com/proto/NFRay0y04jqzjOOwjRlurW/Arowosegbe-Khadijah's-Portfolio?page-id=0%3A1&node-id=4%3A210&viewport=-214%2C116%2C0.33&scaling=scale-down&starting-point-node-id=4%3A210"> Khadijah</a> {" "} and Developed by   <a href="https://github.com/mo-renike">Morenike</a>
    </div>
  </div>
);

export default Footer;

  //  <div className="footer__address">
  //     <SubHeading title="Contact The Developer" />
  //     {/* <p><i class="fa fa-map-marker" aria-hidden="true"></i> Lagos Nigeria</p> */}
  //     <a href="mailto:herroyalpianist@gmail.com">
  //       <AiFillMail />  Send a mail{" "}
  //     </a>{" "}
  //     <br />
  //     <a href="https://wa.me/+2348099772916">
  //       {" "}
  //       <AiOutlineWhatsApp />  Message me on whatsapp
  //     </a>
  //   </div>

  //   <div className="footer__socials">
  //     <a href="https://github.com/mo-renike">
  //       <AiFillGithub />
  //     </a>
  //     <a href="https://codepen.io/herroyalpianist">
  //       <AiFillCodepenCircle />
  //     </a>
  //     <a href="https://twitter.com/mo_renike_">
  //       <AiOutlineTwitter />
  //     </a>
  //     <a href="https://www.instagram.com/herroyalpianist/">
  //       <AiFillInstagram />
  //     </a>
  //     <a href="https://www.linkedin.com/in/morenike-oyewole/">
  //       <AiFillLinkedin />
  //     </a>
  //   </div>