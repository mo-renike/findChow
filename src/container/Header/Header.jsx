import React from "react";
import { HashLink } from "react-router-hash-link";
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
    <section className="header" id="home">
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
    </section>
  );
};

export default Header;
