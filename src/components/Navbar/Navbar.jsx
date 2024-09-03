import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdFavorite, MdLogin, MdLogout, MdOutlineRestaurantMenu } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import FoodTypeDropdown from "../FoodType/FoodTypeDropdown";
import logo from '../../images/fc_logo.png'

const Navbar = ({ signOut, user }) => {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        <img src={logo} alt="FindChow" />
        Find Chow
      </Link>
      {location.pathname === "/" && <FoodTypeDropdown />}
      <div className="app__navbar-links">

        <div className="app__navbar-user">
          {!user ? (
            <Link to="/login" style={{ fontSize: "1.2rem" }}>
              <MdLogin style={{ marginRight: "5px" }} />  Login
            </Link>
          ) : (
            <div onClick={handleShow} className="app__navbar-profile">
              {user &&
                <div className="app__navbar-profile_flex">
                  <img src={user.photoURL} alt="" />
                  <p>{user.displayName} <RiArrowDownSFill /></p>
                </div>
              }
            </div>
          )}

          {show && (
            <ul className="slide-bottom app__navbar-profile_show">
              <li>
                {" "}
                <Link onClick={handleShow} to="/favorites">
                  <MdFavorite />  Favorites
                </Link>
              </li>

              <li onClick={signOut}>
                <a href="/">       <MdLogout />    Logout</a>
              </li>

            </ul>
          )}
        </div>
      </div>
      <div className="app__navbar-mobile">
        <GiHamburgerMenu
          style={{ marginLeft: "7px" }}
          fontSize={27}
          color="#af1b3f"
          cursor="pointer"
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <div className="app__navbar-mobile_overlay  slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color="#ecd444"
              className="overlay-close"
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="app__navbar-mobile-links">
              {/* {location.pathname === "/" && <FoodTypeDropdown setToggle={setToggle} />} */}
              <li onClick={() => {
                setToggle(false);
              }}>
                {user ? (
                  <li>
                    <Link to="/favorites" className="app__navbar-link">
                      Favorites
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </li>

              <li
                className="p__opensans app__navbar-link"
                onClick={() => {
                  setToggle(false);
                }}
              >
                {user ? (
                  <a href="/" onClick={signOut}>Logout</a>
                ) : (
                  <Link to="/login" className="app__navbar-link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
// comment to trigger rebuild
export default Navbar;
