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
          {foodType === "amala" ? (<h1>Find the best <em>amala </em> spots near you</h1>) :
            foodType === "chinese" ? (<h1> Discover <em>Chinese Cuisine</em> and dining experiences in town!</h1>) :
              (<h1>Craving for a taste of <em>Calabar kitchen?</em> find spots near you in a snap!</h1>)}

          <p className="header__info-text">
            Unleash your inner foodie! Discover top-rated {foodType === "calabar%2Ckitchen" ? "Calabar" : foodType} spots nearby and check reviews before heading there. <br />
            {/* <br /> Plus, you can save your top spots and share them with your foodie friends.  */}
            Don't settle for mediocre meals, let us help you find the best {foodType === "calabar%2Ckitchen" ? "Calabar Kitchen" : foodType} around!
          </p>
          <HashLink to="/#spots" className="pry__button">
            Explore {foodType === "calabar%2Ckitchen" ? "Calabar" : foodType} Spots
          </HashLink>
        </div>
        <BannerSlider />
      </div>
    </section>
  );
};

export default Header;
