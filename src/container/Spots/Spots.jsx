import React, { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { SubHeading } from "../../components/Headings/Headings";
import { FetchData, spotOptions } from "../../FetchData";
import Loader from "../../components/Loader";
import "./Spots.scss";
import Modal from "../../Pages/Modal";
import Pagination from "../../components/Pagination/Pagination";

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

  // set dynamic spotsPerPage value according to screen size
  if (window.innerWidth <= 768) {
    var dynamicPerPage = 3;
  } else {
    dynamicPerPage = 9;
  }
  // implement pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [spotsPerPage] = useState(dynamicPerPage);
  const indexOfLastSpot = currentPage * spotsPerPage;
  const indexOfFirstSpot = indexOfLastSpot - spotsPerPage;
  const currentSpots = spots ? spots.slice(indexOfFirstSpot, indexOfLastSpot) : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // calculate page numbers 

  let pageNumbers = [];
  if (spots) {
    for (let i = 1; i <= Math.ceil(spots.length / spotsPerPage); i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers = [0, 1, 2, 3];
  }

  useEffect(() => {
    //fetching all the data  
    let url = `https://local-business-data.p.rapidapi.com/search-nearby?query=amala&lat=${latitude}&lng=${longitude}&limit=30&language=en'`
    const fetchData = async () => {
      //fetching spots data
      const spotsData = await FetchData(
        url,
        spotOptions
      );
      //console.log(spotsData.data);
      setSpots(spotsData.data);
    }
    fetchData();


    // get user location
    const showCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
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
        <SubHeading title={`Showing ${spots ? spots.length : ""} Amala Spots In your area`} /> <br />
        <div className="spots__wrapper">
          {currentSpots ? (
            currentSpots.map((spot) => (
              <div key={spot.place_id} className="spots__wrapper_item">

                <h3>
                  {
                    spot.name.length < 15
                      ? `${spot.name}`
                      : `${spot.name.substring(0, 15)}...`
                  }
                </h3>

                <div className="spots__wrapper_item-dets">
                  <p>
                    {" "}
                    {spot.business_status && spot.business_status === "OPEN"
                      ? "Currently Open"
                      : "Currently Closed"}
                  </p>
                  <div className="rating">
                    {spot.rating} {"  "}
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {spot.rating > i ? <FaStar /> : <FaRegStar />}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setModalContent(spot)}
                >
                  More Details &rarr;
                </button>
              </div>
            ))
          ) : <Loader />}

          {isOpen &&
            modal.map((spot, idx) => {
              return <Modal spot={spot} key={idx} toggleModal={toggleModal} />;
            })}
        </div>
        <Pagination
          spots={spots}
          spotsPerPage={spotsPerPage}
          currentPage={currentPage}
          paginate={paginate}
          pageNumbers={pageNumbers}

        />
      </div>
    </div>
  );
};

export default Spots;
