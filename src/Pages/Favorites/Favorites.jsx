import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore";

import "./Favorites.scss"
import { AppContext } from '../../AppContext';
import { SubHeading } from '../../components/Headings/Headings';
import SIngleSpot from '../../container/Spots/SIngleSpot';

const Favorites = () => {
    const [favoriteSpotsFromDB, setFavoriteSpotsFromDB] = useState([]);

    const { setFavoriteSpots, setModalContent, modal, isOpen, setIsOpen } = useContext(AppContext);

    const toggleModal = () => {
        setIsOpen(false);
    };
    // get all the favorites from the database and update the state
    useEffect(() => {
        const getFavorites = async () => {
            const querySnapshot = await getDocs(collection(db, "favorites"));
            const favorites = querySnapshot.docs.map((doc) => doc.data().favorites);
            setFavoriteSpotsFromDB(favorites);
        };
        getFavorites();

    }, [setFavoriteSpots, favoriteSpotsFromDB]);

    return (
        <div className='favorites'>
            <SubHeading title="Favorites" />
            <SIngleSpot currentSpots={favoriteSpotsFromDB} modal={modal} isOpen={isOpen} setFavoriteSpots={setFavoriteSpots} setModalContent={setModalContent} toggleModal={toggleModal} />
        </div>
    );
};

export default Favorites;
