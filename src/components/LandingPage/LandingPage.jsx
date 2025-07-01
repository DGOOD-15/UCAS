import React from "react";
import "./LandingPage.css";

function LandingPage({ onEnter }) {
  return (
    <div className="landing-page">
      <div className="landing-page__logo"></div>
      <button className="landing-page__button" onClick={onEnter}>
        Click to Enter
      </button>
    </div>
  );
}

export default LandingPage;
