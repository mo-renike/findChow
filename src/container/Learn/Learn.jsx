import React, { useContext } from "react";
import "./Learn.scss";
import "../../components/BannerSlider/BannerSlider.scss";
import { SubHeading } from "../../components/Headings/Headings";
import { AppContext } from "../../AppContext";

import slide1 from "../../images/amala2.jpeg";
import calabar2 from "../../images/calabar-3.jpg";
import chinese1 from "../../images/kung.jpg";

const Learn = () => {
  const { foodType } = useContext(AppContext);

  return (
    <section className="learn" id="learn">
      <div className="learn__img">
        {foodType === "amala" ? (
          <div className="slider__image">
            <img src={slide1} alt={foodType} />
          </div>
        ) : foodType === "chinese" ? (
          <div className="slider__image">
            <img src={chinese1} alt={foodType} />
          </div>
        ) : (
          <div className="slider__image">
            <img src={calabar2} alt={foodType} />
          </div>
        )}
      </div>
      <div className="learn__text">
        <span>LEARN</span>
        {foodType === "amala" ? (
          <SubHeading title="Amala without Lumps" />
        ) : foodType === "chinese" ? (
          <SubHeading title="Kung Pao Chicken" />
        ) : (
          <SubHeading title="White Soup/ Ofe-Nsala" />
        )}

        <p>
          The great thing about{" "}
          {foodType === "amala"
            ? "amala"
            : foodType === "chinese"
              ? "Kung Pao Chicken"
              : "White Soup"}{" "}
          is that it is and easy to prepare. To ensure you get the best
          results, click the button below to learn how to make{" "}
          {foodType === "amala"
            ? "amala"
            : foodType === "chinese"
              ? "chinese food"
              : "White Soup"}{" "}
          at home.
        </p>
        {foodType === "amala" ? (
          <a
            target="blank"
            href="https://www.youtube.com/embed/KbYJj_gSZME"
            className="pry__button"
          >
            See how it's made!
          </a>
        ) : foodType === "chinese" ? (
          <a
            target="blank"
            href="https://www.youtube.com/watch?v=YT8oN4U7Vm8"
            className="pry__button"
          >
            See how it's made!
          </a>
        ) : (
          <a
            target="blank"
            href="https://www.youtube.com/watch?v=yOr7sx6Usfg"
            className="pry__button"
          >
            See how it's made!
          </a>
        )}
      </div>
    </section>
  );
};

export default Learn;
