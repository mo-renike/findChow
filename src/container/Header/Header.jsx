import React from "react";
import { HashLink } from "react-router-hash-link";
import { Heading } from "../../components/Headings/Headings";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__info">
        <Heading title="How many wraps of Hot, fluffy, amala can you finish?" />
        <p>Your number one stop for everything amala. Find amala spots closest to you, Learn how to make amala on your own, read or engage in online conversations about amala, more...
        </p>
        <HashLink to="/#spots" className="pry__button">
          Explore Amala Spots
        </HashLink>
      </div>
      <div className="header__img">
        <img src="https://getreliancehealth.com/blog/wp-content/uploads/2020/09/Amala-On-the-Spot.jpg" alt="aphoto" />
      </div>
    </div>
  );
};

export default Header;
