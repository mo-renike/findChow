import React from "react";
//import { SubHeading } from "../../components/Headings/Headings";
import "./Video.scss";



const Video = () => {
  return (
    <div>
      {/* <div className="video">
        <SubHeading title="How To make amala at home" />
      </div> */}
      <iframe
        src="https://www.youtube.com/embed/KbYJj_gSZME"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
};

export default Video;
