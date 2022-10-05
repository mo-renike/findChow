import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">Everything Amala</div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <HashLink to="/#spots">Find Amala Spots</HashLink>
        </li>
        <li className="p__opensans">
          <HashLink to="/#tweets">See latest Tweets</HashLink>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-mobile">
        <GiHamburgerMenu
          className="ham"
          fontSize={27}
          color="#ff2a00"
          cursor="pointer"
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <div className="app__navbar-mobile_overlay  slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color="#fff"
              className="overlay-close"
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="app__navbar-mobile-links">

              <li className="p__opensans" onClick={() => {
                setToggle(false);
              }}>
                <a href="#spots">Find Amala Spots</a>
              </li>
              <li className="p__opensans" onClick={() => {
                setToggle(false);
              }}>
                <a href="#tweets">See Tweets</a>
              </li>
              <li className="p__opensans" onClick={() => {
                setToggle(false);
              }}>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
