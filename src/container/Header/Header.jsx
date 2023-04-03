import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { HashLink } from "react-router-hash-link";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
//import { Heading } from "../../components/Headings/Headings";
import "./Header.scss";


const Header = () => {
  const { foodType } = useContext(AppContext);

  return (
    <section className="header" id="home">
      <div className="header__wrapper">
        <div className="header__info">
          {foodType === "amala" ? (<h1>How Many Wraps of <em>Hot, Fluffy Amala</em> Can You Finish?</h1>) :
            foodType === "chinese" ? (<h1> Find  best the <em>Chinese Cuisine</em> closest to you</h1>) :
              (<h1>Find the Best <em>Calabar Kitchen</em> Near You - Easy and Quick!</h1>)}

          <p className="header__info-text">
            Find {foodType} spots closest to
            you, check information about each spot including reviews, rating, description, and contact details.

          </p>
          <HashLink to="/#spots" className="pry__button">
            Explore {foodType} Spots
          </HashLink>
        </div>
        <BannerSlider />
      </div>
    </section>
  );
};

export default Header;
