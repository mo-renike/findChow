import React, { useContext } from "react";
import "./Learn.scss";
import "../../components/BannerSlider/BannerSlider.scss"
import { SubHeading } from "../../components/Headings/Headings";
import { AppContext } from "../../AppContext";


import slide1 from "../../images/amala2.jpeg";
import calabar2 from "../../images/calabar-3.jpg"
import chinese1 from "../../images/chinese-1.jpg"


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
          <SubHeading title="How to make chinese food" />
        ) : (
          <SubHeading title="White Soup" />
        )}

        <p>
          The great thing about{" "}
          {foodType === "amala"
            ? "amala"
            : foodType === "chinese"
              ? "chinese food"
              : "White Soup"}{" "}
          is that it is quick and easy to prepare. To ensure you get the best
          results, click the button below to learn how to make{" "}
          {foodType === "amala"
            ? "amala"
            : foodType === "chinese"
              ? "chinese food"
              : "White Soup"}{" "}
          at home.
        </p>
        {foodType === "amala" ? (<a
          target="blank"
          href="https://www.youtube.com/embed/KbYJj_gSZME"
          className="pry__button"
        >
          Watch Now
        </a>) : foodType === "chinese" ? (<a
          target="blank"
          href="https://www.youtube.com/embed/KbYJj_gSZME"
          className="pry__button"
        >
          Watch Now
        </a>) : (<a
          target="blank"
          href="https://www.youtube.com/embed/KbYJj_gSZME"
          className="pry__button"
        >
          Watch Now
        </a>)}

      </div>
    </section>
  );
};

export default Learn;
