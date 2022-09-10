import React from "react";
import { SubHeading } from "../../components/Headings/Headings";
//import { SubHeading, Heading } from "../../components/Headings/Headings";
import images from "../../constants/images";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__info">
        <SubHeading title="Do You Like Amala?" />
        <h1 className="heading">
          How many wraps of Hot, fluffy, light, amala can you finish?
        </h1>
        <SubHeading
          title="  Enable location *** and let us Hook you up with the best amala spots
          near you..."
        />
        <button type="button" className="pry__button">
          Explore Spots
        </button>
      </div>
      <div className="header__img">
        {/* <img src={images.amala} alt="intro_img" /> */}
      </div>
    </div>
  );
};

export default Header;
