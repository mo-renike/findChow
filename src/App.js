import React from "react";

import { Video, Spots, Footer, Gallery, Header } from "./container";
import { Navbar } from "./components";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Video />
    <Spots />
    <Gallery />
    <Footer />
  </div>
);

export default App;
