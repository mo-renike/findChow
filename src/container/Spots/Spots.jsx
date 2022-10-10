import React, { useState, useEffect } from "react";
import axios from "axios";
import { SubHeading } from "../../components/Headings/Headings";
import { FetchData, spotOptions } from "../../FetchData";
import Loader from "../../components/Loader";
import "./Spots.scss";
import Modal from "../../Pages/Modal";

const Spots = () => {
  const [spots, setSpots] = useState([]);
  const [latitude, setLatitude] = useState(6.4522);
  const [longitude, setLongitude] = useState(3.612);

  //logic for modal
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState([]);

  const setModalContent = (spot) => {
    setModal([spot]);
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    //fetching all the data
    const fetchData = async () => {
      //fetching spots data
      const spotsData = await FetchData(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C%20${longitude}&radius=3000&language=en&keyword=amala&name=amala&key=AIzaSyBiVr3N5E4oa0pBJ8Q8m64UFBk5M0JtdXw`,
        spotOptions
      );
      console.log(spotsData ? spotsData : "no data");
      setSpots(spotsData);

      //fetching data using 
      // let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C%20${longitude}&radius=3000&language=en&keyword=amala&name=amala&key=AIzaSyBiVr3N5E4oa0pBJ8Q8m64UFBk5M0JtdXw`;

      // axios.get(url)
      //   .then(response => {
      //     console.log(response.data)
      //   })
      //   .catch(err => {
      //     console.log(err.message)
      //   })

    };
    fetchData();

    // get user location
    const showCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          //console.log(latitude, longitude);
        });

      } else {
        window.alert("Geolocation is not supported by this browser.");
      }
    };
    showCurrentLocation();

    //prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [latitude, longitude, isOpen]);

  return (
    <div className="spots" id="spots">
      <div className="spots__inner">
        <SubHeading title="Amala Spots In your area" />
        <div className="spots__wrapper">
          {spots.length ? (
            spots.map((spot) => (
              <div key={spot.id} className="spots__wrapper_item">
                {/* <img
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${spot.photo && spot.photos[0].photo_reference}&key=b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af`}
                alt={spot.name}
              /> */}
                <SubHeading
                  title={
                    spot.name.length < 16
                      ? `${spot.name}`
                      : `${spot.name.substring(0, 16)}...`
                  }
                />

                <div className="spots__wrapper_item-dets">
                  <p>
                    {" "}
                    {spot.opening_hours && spot.opening_hours.open_now === true
                      ? "Currently Open"
                      : "Currently Closed"}
                  </p>
                  <p>&#9733; {spot.rating}</p>
                </div>

                <button
                  className="button"
                  onClick={() => setModalContent(spot)}
                >
                  More Details &rarr;
                </button>
              </div>
            ))
          ) : (
            <Loader />
          )}
          {isOpen &&
            modal.map((spot) => {
              return <Modal spot={spot} toggleModal={toggleModal} />;
            })}{" "}
        </div>
      </div>
    </div>
  );
};

export default Spots;
