import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

import "./Favorites.scss"
import { SubHeading } from '../../components/Headings/Headings';
import SIngleSpot from '../../container/Spots/SIngleSpot';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Favorites = () => {
    const [favoriteSpotsFromDB, setFavoriteSpotsFromDB] = useState([]);


    // get all the favorites from the database and update the state
    useEffect(() => {
        const getFavorites = async () => {
            const querySnapshot = await getDocs(collection(db, "favorites"));
            const favorites = querySnapshot.docs.map((doc) => doc.data().favorites);
            setFavoriteSpotsFromDB(favorites);
        };
        getFavorites();

    }, [favoriteSpotsFromDB]);

    return (
        <div className='favorites'>
            <Link to="/" style={{ fontSize: "12px", marginRight: "0px" }} > <FaArrowLeft style={{ marginRight: "9px" }} />Go back Home</Link>
            <SubHeading title="Favorites" />
            <p>
                All your favorite spots in one place
            </p>
            <div className="spots__wrapper"> {
                favoriteSpotsFromDB.map((spot) => (
                    <SIngleSpot spot={favoriteSpotsFromDB} />
                ))
            }</div>


        </div>
    );
};

export default Favorites;
