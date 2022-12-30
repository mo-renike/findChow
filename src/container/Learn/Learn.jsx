import "./Learn.scss";
import image from "../../images/learn.png";
import { SubHeading } from "../../components/Headings/Headings";


const Learn = () => {

  return (
    <section className="learn" id="learn">
      <div className="learn__img">
        <img src={image} alt="" />
      </div>
      <div className="learn__text">
        <span>LEARN</span>
        <SubHeading title="Amala without Lumps" />

        <p>
          The great thing about Amala is that it is quick and easy to prepare. To ensure you get the
          smoothest results, click the button below to learn how to make amala at home.
        </p>
        <a target="blank" href="https://www.youtube.com/embed/KbYJj_gSZME" className="pry__button">Watch Now</a>
      </div>
    </section>
  );
};

export default Learn;
