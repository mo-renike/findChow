import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";
import { AppContext } from "../../AppContext";
import "./Favorites.scss"
import { SubHeading } from '../../components/Headings/Headings';
import SIngleSpot from '../../container/Spots/SIngleSpot';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const Favorites = () => {
    const [favoriteSpotsFromDB, setFavoriteSpotsFromDB] = useState([]);
    const { currentUser } =
        useContext(AppContext);
    const navigate = useNavigate();

    useEffect(() => {
        const getFavorites = async () => {
            if (!currentUser) {
                navigate("/login");
                return;
            }
            const userFavoritesRef = collection(db, "users", currentUser.uid, "favorites");
            const querySnapshot = await getDocs(userFavoritesRef);
            const favorites = querySnapshot.docs.map((doc) => doc.data());
            setFavoriteSpotsFromDB(favorites);
        };

        getFavorites();

    }, [currentUser, navigate]);

    return (
        <div className='favorites'>
            <Link to="/" style={{ fontSize: "12px", marginRight: "0px" }} >
                <FaArrowLeft style={{ marginRight: "9px" }} />Go back Home
            </Link>
            <SubHeading title="Favorites" />
            <p>
                All your favorite spots in one place
            </p>
            <div className="spots__wrapper">
                {favoriteSpotsFromDB.map((spot) => (
                    <SIngleSpot key={spot.place_id} spot={spot} />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
