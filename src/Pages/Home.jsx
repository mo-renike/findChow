import React from "react";
import { Spots, Learn, Header } from "../container";
import HomeSeo from "../components/SEO/HomeSeo";


const App = () => (
  <div>
    <HomeSeo />
    <Header /> <br /> <br />
    <div style={{
      maxWidth: "1560px",
      margin: "auto",
    }}>
      <Learn />
      <Spots />
    </div>
  </div>
);

export default App;