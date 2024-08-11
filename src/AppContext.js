import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [foodType, setFoodType] = useState("amala");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [favoriteSpots, setFavoriteSpots] = useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);

  const [spots, setSpots] = useState([]);


  return (
    <AppContext.Provider
      value={{
        foodType,
        setFoodType,
        favoriteSpots,
        setFavoriteSpots,
        currentUser,
        setCurrentUser,
        latitude, setLatitude,
        longitude, setLongitude,
        spots, setSpots
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
