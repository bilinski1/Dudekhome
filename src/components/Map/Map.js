import React from "react";
import "./Map.scss";
import { StaticImage } from "gatsby-plugin-image";

const Map = () => {
  return (
    <div className="map-wrapper">
      <StaticImage
        src="../../images/line.jpg"
        alt="line"
        placeholder="blurred"
        layout="fullWidth"
      />
      <StaticImage
        src="../../images/map3.png"
        alt="map"
        placeholder="blurred"
        layout="fullWidth"
      />
    </div>
  );
};

export default Map;
