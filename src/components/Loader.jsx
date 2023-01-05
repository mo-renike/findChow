import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="120"
        width="120"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#af1b3f", "#ecd444", "#af1b3f", "#ecd444", "#af1b37"]}
      />
    </div>
  );
};

export default Loader;
