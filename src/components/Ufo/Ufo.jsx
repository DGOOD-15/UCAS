import React from "react";
import "./UFO.css";
import ufo from "../../assets/ufo.png";

function Ufo() {
  return (
    <div className="ufo-container">
      <div className="ufo">
        <img src={ufo} alt="UFO" className="ufo-img" />
        <div className="laser"></div>
      </div>
    </div>
  );
}
export default Ufo;
