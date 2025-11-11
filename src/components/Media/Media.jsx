import React from "react";
import "./Media.css";
import staticBG from "../../assets/static.mp4";
import YouTubePlayer from "../YoutubePlayer/YoutubePlayer"; // Adjust path if needed

function Media() {
  return (
    <section className="media-section" aria-label="Music video player section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="media-background"
        aria-hidden="true"
      >
        <source src={staticBG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="media-content">
        <h1 className="media-title">New Music Video "Not For Sale In California" Out Now!</h1>
        <YouTubePlayer videoId="9Q6OPoBPYpM" playerId="youtube-player-1" />
        <p className="media-subtitle">Watch our other music video "Slippin on 7" below.</p>
        <YouTubePlayer videoId="nTTfOvAGMew" playerId="youtube-player-2" />
        <p className="media-subtitle">Watch our other music video "Blue House" below.</p>
        <YouTubePlayer videoId="puzvgHlI0iQ" playerId="youtube-player-3" />
      </div>
    </section>
  );
}

export default Media;