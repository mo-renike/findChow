import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./container";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { ErrorBoundary } from "react-error-boundary";
import NotFound from "./components/NotFound/NotFound";
import { ErrorFallback } from "./components/ErrorBoundary/ErrorFallback";

const App = () => (
  <div>
    <Navbar />
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
    <Footer />
  </div>
);

export default App;
