import React from "react";
import { HashLink } from "react-router-hash-link";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
//import { Heading } from "../../components/Headings/Headings";
import "./Header.scss";

// const title = () => {
//   return (
//     <div>
//       How Many Wraps of <em>Hot, Fluffy Amala</em> Can You Finish?
//     </div>
//   );
// };

const Header = () => {
  return (
    <section className="header" id="home">
      <div className="header__wrapper">
        <div className="header__info">
          <h1>How Many Wraps of <em>Hot, Fluffy Amala</em> Can You Finish?</h1>
          <p className="header__info-text">
            Your number one stop for everything amala. Find amala spots closest to
            you, Learn how to make amala on your own, read or engage in online
            conversations about amala, more...
          </p>
          <HashLink to="/#spots" className="pry__button">
            Explore Amala Spots
          </HashLink>
        </div>
        <BannerSlider />
      </div>

    </section>
  );
};

export default Header;
