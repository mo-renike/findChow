import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#fa3701", "#B2A3B5", "#fa3701", "#345678", "#05f340"]}
      />
    </div>
  );
};

export default Loader;
