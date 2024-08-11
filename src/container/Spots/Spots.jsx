import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppContext";
import { SubHeading } from "../../components/Headings/Headings";
import "./Spots.scss";
import Pagination from "../../components/Pagination/Pagination";
import SIngleSpot from "./SIngleSpot";
import Loader from "../../components/Loader";
import { haversineDistance } from "../../utils/index";

const Spots = () => {
  const [loading, setLoading] = useState(false);


  const {
    foodType,
    modal,
    setModalContent,
    isOpen,
    setIsOpen,
    latitude,
    longitude,
    setLatitude,
    setLongitude,
    spots,
    setSpots
  } = useContext(AppContext);

  const toggleModal = () => {
    setIsOpen(false);
  };

  // set dynamic spotsPerPage value according to screen size

  if (window.innerWidth <= 768) {
    var dynamicPerPage = 4;
  } else {
    dynamicPerPage = 9;
  }
  // implement pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [spotsPerPage] = useState(dynamicPerPage);
  const indexOfLastSpot = currentPage * spotsPerPage;
  const indexOfFirstSpot = indexOfLastSpot - spotsPerPage;
  const currentSpots = spots
    ? spots.slice(indexOfFirstSpot, indexOfLastSpot)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // calculate page numbers for pagination
  let pageNumbers = [];
  if (spots) {
    for (let i = 1; i <= Math.ceil(spots.length / spotsPerPage); i++) {
      pageNumbers.push(i);
    }
  } else {
    pageNumbers = [0, 1, 2, 3];
  }

  useEffect(() => {
    // get user location using  geolocation  when the component mounts
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };
    getLocation();
  }, [latitude, longitude, setLatitude, setLongitude]);

  useEffect(() => {
    const getSpots = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:8080/api/place?latitude=${latitude}&longitude=${longitude}&keyword=${foodType}&name=${foodType}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        } else {
          const data = await res.json();
          const placesWithDistances = data.results.map(place => {
            const distance = haversineDistance(latitude, longitude, place.geometry.location.lat, place.geometry.location.lng);
            return { ...place, distance };
          });

          setSpots(placesWithDistances);


          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSpots();
  }, [foodType, latitude, longitude, setSpots]);

  useEffect(() => {
    //prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div className="spots" id="spots">
      <div className="spots__inner">
        <SubHeading
          title={`Showing ${spots ? spots.length : ""} ${foodType === "calabar%2Ckitchen" ? "Calabar" : foodType
            } Spots In your area`}
        />{" "}
        <br />
        <div className="spots__wrapper">
          {currentSpots.map((spot, idx) => (
            <SIngleSpot
              key={idx}
              spot={spot}
              toggleModal={toggleModal}
              setModalContent={setModalContent}
              isOpen={isOpen}
              modal={modal}
            />
          ))}
        </div>
        <Pagination
          spots={spots}
          spotsPerPage={spotsPerPage}
          currentPage={currentPage}
          paginate={paginate}
          pageNumbers={pageNumbers}
        />
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Spots;
