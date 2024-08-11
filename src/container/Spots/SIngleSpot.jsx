import React, { useContext } from "react";
import { FaStar, FaRegStar, FaChevronRight } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Modal from "../../Pages/Details";
import "./Spots.scss";
import { db } from "../../firebase";
import {
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { toast } from 'react-toastify';
import { AppContext } from "../../AppContext";
import { useNavigate } from "react-router-dom";

const SIngleSpot = ({ spot, setModalContent, isOpen, modal, toggleModal }) => {

    const { favoriteSpots, setFavoriteSpots, currentUser } =
        useContext(AppContext);
    const navigate = useNavigate();

    const toggleFavorite = async (spot) => {
        if (!currentUser) {

            toast.info("Please login to add favorites", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            navigate("/login");
            return;
        }

        const isFavorite = favoriteSpots.some(
            (favoriteSpot) => favoriteSpot.place_id === spot.place_id
        );
        let newFavorites;
        if (isFavorite) {
            newFavorites = favoriteSpots.filter(
                (favoriteSpot) => favoriteSpot.place_id !== spot.place_id
            );
            setFavoriteSpots(newFavorites);
            toast.success("Removed from favorites!", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            try {
                const querySnapshot = await getDocs(collection(db, "favorites"));
                const docId = querySnapshot.docs.find(
                    (doc) => doc.data().favorites.place_id === spot.place_id
                )?.id;
                if (docId) {
                    await deleteDoc(doc(db, "favorites", docId));
                }
            } catch (e) {
                console.error("Error deleting document: ", e);
            }
        } else {
            newFavorites = [...favoriteSpots, spot];
            setFavoriteSpots(newFavorites);

            toast.success("Added to favorites!", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            try {
                const docRef = await addDoc(collection(db, "favorites"), {
                    favorites: spot,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    return (
        <>

            <div className="spots__wrapper_item">
                <h3>
                    {spot && spot.name.length < 18
                        ? `${spot.name}`
                        : `${spot.name.substring(0, 18)}...`}
                </h3>
                <span className="fav" onClick={() => toggleFavorite(spot)}>
                    {favoriteSpots.some(
                        (favoriteSpot) => favoriteSpot.place_id === spot.place_id
                    ) ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}
                </span>
                <div className="spots__wrapper_item-dets"><p>{spot.distance}km</p>
                    <p>
                        {spot.opening_hours?.open_now &&
                            spot.opening_hours?.open_now === true
                            ? "Currently open"
                            : "Currently closed"}
                    </p>
                    <div className="rating">
                        {/* {spot.rating} {"  "} */}
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                                {spot.rating > i ? <FaStar /> : <FaRegStar />}
                            </span>
                        ))}
                    </div>
                </div>
                <button onClick={() => setModalContent(spot)}>
                    More Details <FaChevronRight style={{ marginLeft: "5px" }} />
                </button>
            </div>

            {isOpen &&
                modal.map((spot, idx) => {
                    return <Modal spot={spot} key={idx} toggleModal={toggleModal} />;
                })}
        </>
    );
};

export default SIngleSpot;
