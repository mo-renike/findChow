import React from "react";
// eslint-disable-next-line no-unused-vars
import { Tweet, Spots, Learn, Header } from "../container";
//import OtherApps from "../container/OtherApp/OtherApps";

const App = () => (
  <div>
    <Header /> <br /> <br />
    <div style={{
      maxWidth: "1560px",
      margin: "auto"
    }}>
      <Learn />
      <Spots />
      {/* <Tweet /> */}
      {/* <OtherApps /> */}
    </div>
  </div>
);

export default App;