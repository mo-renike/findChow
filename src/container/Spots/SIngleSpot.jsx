import React, { useContext } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Loader from "../../components/Loader";
import Modal from "../../Pages/Modal";
import "./Spots.scss";

import { AppContext } from '../../AppContext';


const SIngleSpot = ({
    currentSpots,
    setModalContent,
    isOpen,
    modal,
    toggleModal,

}) => {

    const { favoriteSpots, setFavoriteSpots } = useContext(AppContext);


    const toggleFavorite = (spot) => {
        const isFavorite = favoriteSpots.some((favoriteSpot) => favoriteSpot.place_id === spot.place_id);
        if (isFavorite) {
            const newFavoriteSpots = favoriteSpots.filter((favoriteSpot) => favoriteSpot.place_id !== spot.place_id);
            setFavoriteSpots(newFavoriteSpots);
        } else {
            setFavoriteSpots([...favoriteSpots, spot]);
        }
    };


    return (
        <div className="spots__wrapper">
            {currentSpots.length !== 0 ? (
                currentSpots.map((spot) => (
                    <div key={spot.place_id} className="spots__wrapper_item">
                        <div className="d-f">
                            <h3>
                                {
                                    spot.name.length < 17
                                        ? `${spot.name}`
                                        : `${spot.name.substring(0, 17)}...`
                                }
                            </h3>
                            <span onClick={() => toggleFavorite(spot)}>
                                {favoriteSpots.some((favoriteSpot) => favoriteSpot.place_id === spot.place_id) ? (<AiFillHeart />) : (<AiOutlineHeart />)}
                            </span>
                        </div>
                        <div className="spots__wrapper_item-dets">
                            <p style={{ display: "flex", justifyContent: "space-between" }}>
                                {" "}
                                {spot.opening_hours?.open_now && spot.opening_hours?.open_now === true
                                    ? "Currently Open"
                                    : "Currently Closed"}
                                {/* {spot.district && spot.district.length > 0 ? ` - ${spot.district}` : ""} */}
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
                        <button onClick={() => setModalContent(spot)}>
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
    )
}

export default SIngleSpot
