import React from "react";
import { HashLink } from "react-router-hash-link";
import { Heading } from "../../components/Headings/Headings";
import "./Header.scss";
// import amala1 from "../../images/amala1.jpeg";
// import amala2 from "../../images/amala2.jpeg";
// import amala3 from "../../images/amala3.jpeg";
// import amala4 from "../../images/amala4.jpeg";
// import amala5 from "../../images/amala5.jpeg";

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="header__info">
        <Heading title="How many wraps of Hot, fluffy, amala can you finish?" />
        <p>Your number one stop for everything amala. Find amala spots closest to you, Learn how to make amala on your own, read or engage in online conversations about amala, more...
        </p>
        <HashLink to="/#spots" className="pry__button">
          Explore Amala Spots
        </HashLink>
      </div>
      <div className="header__img">
        <img src="https://getreliancehealth.com/blog/wp-content/uploads/2020/09/Amala-On-the-Spot.jpg" alt="aphoto" />
      </div>
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
