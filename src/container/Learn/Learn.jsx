import "./Learn.scss";
import image from "../../images/learn.png";

const Learn = () => {
  return (
    <section className="learn" id="learn">
      <div className="learn__imageContainer">
        <img src={image} alt="" />
      </div>
      <div className="learn__textContainer">
        <span className="subHeader-small">LEARN</span>
        <h2 className="header-small">Amala without Lumps </h2>
        <p>
          The great thing about Amala is that it is quick and easy to prepare,
          but then, if you are not careful you may end up with lumps that will
          make its consumption less than appetizing. To ensure you get the
          smoothest results, click the button below.
        </p>
        <button className="button-yellow">Watch Now</button>
      </div>
    </section>
  );
};

export default Learn;
