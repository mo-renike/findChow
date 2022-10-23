import React from "react";
import {
  AiFillMail,
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiFillTwitterCircle,
  AiFillAlert,
} from "react-icons/ai";
import { SubHeading } from "../../components/Headings/Headings";

import "./Footer.scss";

const Footer = () => (
  <footer id="dk-footer" className="dk-footer foot">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-4">
          {/* <div className="dk-footer-box-info"> */}
          <a href="index.html" className="footer-logo i" >
            <img
              src="images/footer_logo.png"
              alt="footer_logo"
              className="img-fluid"
            />
          </a>
          <p className="footer-info-text">
            Your number one stop for everything amala. Find amala spots closest
            to you, Learn how to make amala on your own, read or engage in
            online conversations about amala, more...
          </p>
          <div className="footer-social-link">
            <h3>Follow us</h3>
            <ul>
              <li>
                <a href="#" className="i">
                  <AiFillGithub  /> <span>Github</span>
                </a>
              </li>
              <li>
                <a href="#" className="i">
                  <AiFillCodepenCircle  /> <span>Codeopen</span>
                </a>
              </li>
              <li>
                <a href="#" className="i">
                  <AiFillTwitterCircle  /> <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="i">
                  <AiFillLinkedin  /> <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="i">
                  <AiFillInstagram  /> <span>Instagram</span>
                </a>
              </li>
            </ul>
            {/* </div> */}
          </div>
        </div>
        <div className="col-md-12 col-lg-8">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-us">
                <div className="contact-icon">
                  <i className="fa fa-map-o" aria-hidden="true"></i>
                </div>
                <div className="contact-info">
                  <h3>Jaipur India</h3>
                  <p> 5353 Road Avenue</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-us contact-us-last">
                <div className="contact-icon">
                  <i
                    className="fa fa-volume-control-phone"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="contact-info">
                  <a href="mailto:herroyalpianist@gmail.com" className="i">
                    <p>
                      <AiFillMail /> Send a mail
                    </p>
                  </a>

                  <a href="https://wa.me/+2348099772916" className="i">
                    <p>
                      <AiOutlineWhatsApp /> Message me on whatsapp
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="footer-widget footer-left-widget">
                <div className="section-heading">
                  <h3>Useful Links</h3>
                  <span className="animate-border border-black"></span>
                </div>
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="footer-widget">
                <div className="section-heading">
                  <h3>Subscribe</h3>
                  <span className="animate-border border-black"></span>
                </div>
                <p>
                  {" "}
                  Don’t miss to subscribe to our new feeds, kindly fill the form
                  below. 
                </p>
                <form action="#">
                  <div className="form-row">
                    <div className="col dk-footer-form">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <button type="submit">
                        <AiFillMail />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <span>Designed and Developed by Morenike © 2022</span>
          </div>
          <div className="col-md-6">
            <div className="copyright-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
