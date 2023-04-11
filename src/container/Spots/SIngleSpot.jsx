import React, { useContext, useState, useEffect } from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Loader from "../../components/Loader";
import Modal from "../../Pages/Modal";
import "./Spots.scss";
import { db } from '../../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

import { AppContext } from '../../AppContext';
import ToastAlert from '../../components/Toasts/ToastAlert';
import { useNavigate } from 'react-router-dom';


const SIngleSpot = ({
    currentSpots,
    setModalContent,
    isOpen,
    modal,
    toggleModal,
    spots
}) => {
    const [message, setMessage] = useState('');
    const { favoriteSpots, setFavoriteSpots, currentUser } = useContext(AppContext);
    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true); // new state variable

    const toggleFavorite = async (spot) => {
        if (!currentUser) {
            setMessage("Please log in to add to favorites");
            navigate("/login");
            return;
        }

        const isFavorite = favoriteSpots.some((favoriteSpot) => favoriteSpot.place_id === spot.place_id);
        let newFavorites;
        if (isFavorite) {
            newFavorites = favoriteSpots.filter((favoriteSpot) => favoriteSpot.place_id !== spot.place_id);
            setFavoriteSpots(newFavorites);
            setMessage("Removed from favorites");

            try {
                const querySnapshot = await getDocs(collection(db, "favorites"));
                const docId = querySnapshot.docs.find(doc => doc.data().favorites.place_id === spot.place_id)?.id;
                if (docId) {
                    await deleteDoc(doc(db, "favorites", docId));
                }
            } catch (e) {
                console.error("Error deleting document: ", e);
            }
        } else {
            newFavorites = [...favoriteSpots, spot];
            setFavoriteSpots(newFavorites);
            setMessage("Added to favorites");
            console.log("added");

            try {
                const docRef = await addDoc(collection(db, "favorites"), {
                    favorites: spot
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };


    useEffect(() => {
        let timer;
        if (message !== '') {
            timer = setTimeout(() => {
                setMessage('');
            }, 3000); // 3 seconds
        }
        return () => clearTimeout(timer);
    }, [message]);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "favorites"));
                const favoriteSpotsArray = querySnapshot.docs.map(doc => doc.data().favorites);
                setFavoriteSpots(favoriteSpotsArray);
                setLoading(false);
            } catch (e) {
                console.error("Error getting favorite spots: ", e);
            }
        };
        fetchFavorites();
    }, [setFavoriteSpots]);

    return (
        <div className="spots__wrapper">
            <ToastAlert title={message} />
            {currentSpots.length !== 0 ? (
                currentSpots.map((spot) => (
                    <div key={spot.place_id} className="spots__wrapper_item">

                        <h3>
                            {
                                spot.name.length < 18
                                    ? `${spot.name}`
                                    : `${spot.name.substring(0, 18)}...`
                            }
                        </h3>
                        { }
                        <span className='fav' onClick={() => toggleFavorite(spot)}>
                            {favoriteSpots.some((favoriteSpot) => favoriteSpot.place_id === spot.place_id) ? (<AiFillHeart />) : (<AiOutlineHeart />)}
                        </span>
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
