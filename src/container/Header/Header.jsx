import React from "react";
import { HashLink } from "react-router-hash-link";
import { SubHeading, Heading } from "../../components/Headings/Headings";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__info">
        <Heading title="How many wraps of Hot, fluffy, amala can you finish?" />
        <SubHeading
          title="Everything you need to know about Amala"
        />
        <HashLink to="/#spots" className="pry__button">
          Explore Amala Spots
        </HashLink>
      </div>
      <div className="header__img">
        {/* <img src={images.amala} alt="intro_img" /> */}
      </div>
    </div>
  );
};

export default Header;
