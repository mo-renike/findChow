import React, { useEffect, useContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./container";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./components/NotFound/NotFound";
import { ErrorFallback } from "./components/ErrorBoundary/ErrorFallback";
import { auth, signOut } from "./firebase";
import Favorites from "./Pages/Favorites/Favorites";
import { AppContext } from "./AppContext";

const App = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  // count number of website visits
  let count = localStorage.getItem("page_view");
  if (count === null) {
    count = 1;
  } else {
    count = parseInt(count) + 1;
  }
  localStorage.setItem("page_view", count);

  // signOut
  const signOutUser = () => {
    signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const client = auth.currentUser;
        setCurrentUser(client);
      }
    });
  }, [setCurrentUser]);

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar signOut={signOutUser} user={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </ErrorBoundary>
      <Footer count={count} />
    </div>
  );
};

export default App;
