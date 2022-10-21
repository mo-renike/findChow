import React from "react";

import { Tweet, Video, Spots, Header } from "../container";
import OtherApps from "../container/OtherApp/OtherApps";

const App = () => (
  <div
    style={{
      maxWidth: "1440px",
      width: "100%",
      margin: "auto",
    }}
  >
    <Header />
    {/* <Video /> */}
    <Spots />
    <Tweet />
    <OtherApps />
  </div>
);

export default App;
