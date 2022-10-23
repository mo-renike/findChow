import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HashLink } from "react-router-hash-link";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng,
// } from "react-places-autocomplete";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // const [address, setAddress] = useState("");
  // const [coordinates, setCooardinates] = useState({
  //   lat: null,
  //   lng: null,
  // });
  // const handleSelect = async (value) => {
  //   const results = await geocodeByAddress(value);
  //   const ll = await getLatLng(results[0]);
  //   console.log(ll);
  //   setAddress(value);
  //   setCooardinates(ll);
  // };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">Everything Amala</div>
      <ul className="app__navbar-links">
        {/* <li className="p__opensans">
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div key={suggestions.description}>
                <input
                  {...getInputProps({
                    placeholder: "Search a Amala Restaurant",
                    className: "location-search-input",
                    width: "50%",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    // inline style for demonstration purpose
                    const style = suggestion.active
                      ? { backgroundColor: "blue", cursor: "pointer" }
                      : { backgroundColor: "white", cursor: "pointer" };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
          <p>Address : {address}</p>
        </li> */}
        <li className="app__navbar-link">
          <a href="#contact">Contact</a>
        </li>
        <li className="app__navbar-link">
          <HashLink to="/#tweets">See Tweets</HashLink>
        </li>
        <li className="app__navbar-link">
          <HashLink to="/#learn">Learn</HashLink>
        </li>
        <HashLink to="/#spots">
          <button className="app__navbar-button">Find Amala Spots</button>
        </HashLink>
      </ul>
      <div className="app__navbar-mobile">
        <GiHamburgerMenu
          className="ham"
          fontSize={27}
          color="#ff2a00"
          cursor="pointer"
          onClick={() => {
            setToggle(true);
          }}
        />
        {toggle && (
          <div className="app__navbar-mobile_overlay  slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              color="#fff"
              className="overlay-close"
              onClick={() => {
                setToggle(false);
              }}
            />
            <ul className="app__navbar-mobile-links">
              <li
                className="p__opensans"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href="#contact">Contact</a>
              </li>
              <li
                className="p__opensans"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href="#tweets">See Tweets</a>
              </li>
              <li
                className="p__opensans"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href="#learn">Learn</a>
              </li>
              <li
                className="p__opensans"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <a href="#spots">Find Amala Spots</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
