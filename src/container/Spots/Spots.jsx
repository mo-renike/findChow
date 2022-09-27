import React, { useState, useEffect } from "react";
import { SubHeading } from "../../components/Headings/Headings";
import { FetchData, spotOptions } from "../../FetchData";
import Loader from "../../components/Loader";
import "./Spots.scss";
import Modal from "../../Pages/Modal";


const Spots = () => {
  const [spots, setSpots] = useState([]);
  const [latitude, setLatitude] = useState(6.4522);
  const [longitude, setLongitude] = useState(3.612);

  //writing logic for modal
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState([])


  const setModalContent = (spot) => {
    setModal([spot])
    console.log(spot)
    setIsOpen(!isOpen)
  };

  const toggleModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    //fetching all the data
    const fetchData = async () => {
      //fetching spots data
      const spotsData = await FetchData(
        `https://google-maps28.p.rapidapi.com/maps/api/place/nearbysearch/json?location=${latitude}%2C%20${longitude}&radius=20000&language=en&keyword=amala&name=amala`,
        spotOptions
      );
      // console.log(spotsData.results);
      setSpots(spotsData.results);
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
        window.alert("Current location not available..");
      }
    };
    showCurrentLocation();
  }, []);



  return (
    <div className="spots" id="spots" >
      <SubHeading title="Amala Spots in your area" />
      <div className="spots__wrapper">
        {spots.length ?
          spots.map((spot) => (
            <div key={spot.id} className="spots__wrapper_item">
              <img
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${spot.photo && spot.photos[0].photo_reference}&key=b5955c940amsh9ba067ff07dbc5ap17f2abjsn2acd75e2d6af`}
                alt=""
              />
              <SubHeading title={spot.name.length < 20
                ? `${spot.name}`
                : `${spot.name.substring(0, 20)}...`} />

              <div className="spots__wrapper_item-dets">
                <p>{spot.business_status}</p>
                <p>&#9733; {spot.rating}</p>
              </div>

              <button className="button" onClick={() => setModalContent(spot)}>
                View More Details &rarr;
              </button>

            </div>
          )) : <Loader />}
        {isOpen && modal.map(spot => {
          return (<Modal spot={spot} toggleModal={toggleModal} />)
        })}
      </div>

    </div>
  );
};

export default Spots;
