/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import FoodTypeDropdown from "../FoodType/FoodTypeDropdown";

const Navbar = ({ signOut, user }) => {
  const [toggle, setToggle] = useState(false);

  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="app__navbar">
      <Link to="/" className="app__navbar-logo">
        Find Chow
      </Link>

      <div className="app__navbar-links">
        <FoodTypeDropdown />
        <div className="app__navbar-profile">
          <div onClick={handleShow} className="app__navbar_profile-img">
            {user && user.photoURL ? (
              <img src={user.photoURL} alt="" />
            ) : (
              <span>{user && user.displayName.slice(0, 2)}</span>
            )}
          </div>
          {show && (
            <ul className="slide-bottom">
              <li className="app__navbar-link">
                {" "}
                <Link to="/dashboard" className="app__navbar-link">
                  Favorites
                </Link>
              </li>

              {user ? (
                <li className="app__navbar-link" onClick={signOut}>
                  Logout
                </li>
              ) : (
                <li>
                  {" "}
                  <Link to="/login" className="app__navbar-link">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
      <div className="app__navbar-mobile">
        <GiHamburgerMenu
          className="ham"
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
              <FoodTypeDropdown setToggle={setToggle} />
              <li onClick={() => {
                setToggle(false);
              }}>
                {user ? (
                  <li>
                    <Link to="/dashboard" className="app__navbar-link">
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

export default Navbar;
