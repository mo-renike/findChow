import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [foodType, setFoodType] = useState("amala");
  const [favoriteSpots, setFavoriteSpots] = useState([]);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState([]);

  const setModalContent = (spot) => {
    setModal([spot]);
    setIsOpen(!isOpen);
  };

  return (
    <AppContext.Provider
      value={{
        foodType,
        setFoodType,
        favoriteSpots,
        setFavoriteSpots,
        currentUser,
        setCurrentUser,
        isOpen,
        setIsOpen,
        modal,
        setModal,
        setModalContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
