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
import Details from './Pages/Details'
import { AppContext } from "./AppContext";
import { ToastContainer, } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
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
    <div style={{
      position: 'relative'
    }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Navbar signOut={signOutUser} user={currentUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:placeId" element={<Details />} />
        </Routes>
      </ErrorBoundary>
      <Footer count={count} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
