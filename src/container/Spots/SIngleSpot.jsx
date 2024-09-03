import React, { useContext } from "react";
import { FaStar, FaRegStar, FaChevronRight } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
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

const SIngleSpot = ({ spot }) => {

    const { favoriteSpots, setFavoriteSpots, currentUser, setSelectedSpot, selectedSpot } =
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

        const userFavoritesRef = collection(db, "users", currentUser.uid, "favorites");
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
                const querySnapshot = await getDocs(userFavoritesRef);
                const docId = querySnapshot.docs.find(
                    (doc) => doc.data().place_id === spot.place_id
                )?.id;
                if (docId) {
                    await deleteDoc(doc(db, "users", currentUser.uid, "favorites", docId));
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
                const docRef = await addDoc(userFavoritesRef, {
                    place_id: spot.place_id,
                    name: spot.name,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    };

    const handleClick = () => {

        if (!currentUser) {
            toast.info("Login to view details", {
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
        } else {
            setSelectedSpot(spot)
            navigate(`/${spot.place_id}`)
        }
    }
    React.useEffect(() => {
        if (selectedSpot) {
            localStorage.setItem('selectedSpot', JSON.stringify(selectedSpot));
        }
    }, [selectedSpot]);


    // Return null if spot is undefined
    if (!spot) {
        return null;
    }

    return (

        <div className="spots__wrapper_item">
            <h3>
                {spot.name?.length < 18
                    ? spot.name
                    : `${spot.name?.substring(0, 18)}...`}
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
            <div className="spots__wrapper_item-dets">
                <p>{spot.distance}km</p>
                <p>
                    {spot.opening_hours?.open_now
                        ? "Currently open"
                        : "Currently closed"}
                </p>
                <div className="rating">
                    {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>
                            {spot.rating > i ? <FaStar /> : <FaRegStar />}
                        </span>
                    ))}
                </div>
            </div>
            <button onClick={handleClick}>
                More Details <FaChevronRight style={{ marginLeft: "5px" }} />
            </button>
        </div>
    );
};

export default SIngleSpot;
