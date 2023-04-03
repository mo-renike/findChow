import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // let the two states remain unchanged if the user refreshes the page
  const [foodType, setFoodType] = useState(
    localStorage.getItem("foodType") || "amala"
  );
  const [favoriteSpots, setFavoriteSpots] = useState([]);

  console.log(favoriteSpots);
  return (
    <AppContext.Provider
      value={{ foodType, setFoodType, favoriteSpots, setFavoriteSpots }}
    >
      {children}
    </AppContext.Provider>
  );
};
