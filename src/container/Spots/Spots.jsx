import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import { SubHeading } from "../../components/Headings/Headings";
import "./Spots.scss";
import Pagination from "../../components/Pagination/Pagination";
import SIngleSpot from './SIngleSpot';

const Spots = () => {
  const [spots, setSpots] = useState([]);
  //const [photoUrl, setPhotoUrl] = useState("")
  const [latitude, setLatitude] = useState(6.5095);
  const [longitude, setLongitude] = useState(3.3711);

  const { foodType, modal, setModalContent, isOpen, setIsOpen } = useContext(AppContext);


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
  const currentSpots = spots ? spots.slice(indexOfFirstSpot, indexOfLastSpot) : [];

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
    }; getLocation();

    // get amala spots using google places api
    const getSpots = async () => {
      try {
        const res = await fetch(`https://findchow.onrender.com/api/maps/place?latitude=${latitude}&longitude=${longitude}&radius=51000&type=restaurant&keyword=${foodType}`,
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
          setSpots(data.results);
        }
      } catch (error) {
        console.log(error);
      }
    }; getSpots();

    // get photos

    // const getPhoto = async () => {
    //   try {
    //     const res = await fetch('https://findchow.onrender.com//api/maps/place/photo?photo_reference=')
    //     if (res.ok) {
    //       const photo = await res.json()
    //       setPhotoUrl(photo)
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }; getPhoto()

    //prevent background scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [foodType, isOpen, latitude, longitude]);


  return (
    <div className="spots" id="spots">
      <div className="spots__inner">
        <SubHeading title={`Showing ${spots ? spots.length : ""} ${foodType === "calabar%2Ckitchen" ? "Calabar" : foodType} Spots In your area`} /> <br />
        <SIngleSpot currentSpots={currentSpots} toggleModal={toggleModal} setModalContent={setModalContent} isOpen={isOpen} modal={modal} />
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
