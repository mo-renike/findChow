import React from "react";
import { HashLink } from "react-router-hash-link";
import { BannerSlider } from "../../components/BannerSlider/BannerSlider";
import { Heading } from "../../components/Headings/Headings";
import "./Header.scss";

const title = () => {
  return (
    <div>
      How Many Wraps of <em>Hot, Fluffy Amala</em> Can You Finish?
    </div>
  );
};

console.log(title);
const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__info">
        <Heading
          title={[
            "How Many Wraps of ",
            <em>Hot, Fluffy Amala</em>,
            " Can You Finish?",
          ]}
        />
        <p className="header__text">
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
    // <div className="header2" id="home">
    //   <div className="header2__info">
    //     <Heading title="How many wraps of  " />
    //     <Heading className="accent" title=" Hot, fluffy, amala" />
    //     <Heading title="can you finish?" />
    //     <p>
    //       Your number one stop for everything amala. Find amala spots closest to
    //       you, Learn how to make amala on your own, read or engage in online
    //       conversations about amala, more...
    //     </p>
    //     <HashLink to="/#spots" className="pry__button">
    //       Explore Amala Spots
    //     </HashLink>
    //   </div>
    //   <div className="header2__imgs">
    //     <div className="header2__imgs-img">     <img src={amala1} alt="amala" /></div>
    //     <div className="header2__imgs-img">   <img src={amala2} alt="amala" /></div>
    //     <div className="header2__imgs-img"> <img src={amala3} alt="amala" /></div>
    //     <div className="header2__imgs-img"> <img src={amala4} alt="amala" /></div>
    //     <div className="header2__imgs-img">  <img src={amala5} alt="amala" /></div>

    //   </div>
    // </div>
  );
};

export default Header;
