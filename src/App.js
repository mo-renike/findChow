import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./container";
import Home from "./Pages/Home";

const App = () => (
  <div>
    <Navbar />
    <Home />
    <Footer />
  </div>
);

export default App;
