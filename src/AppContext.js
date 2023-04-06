import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [foodType, setFoodType] = useState(
    localStorage.getItem("foodType") || "amala"
  );
  const [favoriteSpots, setFavoriteSpots] = useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);

  return (
    <AppContext.Provider
      value={{
        foodType,
        setFoodType,
        favoriteSpots,
        setFavoriteSpots,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
