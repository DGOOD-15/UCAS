import React, { useEffect, useState, useRef } from "react";
import "./Media.css";
import staticBG from "../../assets/static.mp4";

function Media() {
  const playerRef = useRef(null);
  const ytPlayerInstance = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    return () => {
      if (ytPlayerInstance.current) {
        ytPlayerInstance.current.destroy();
        ytPlayerInstance.current = null;
      }
    };
  }, []);

  const initializePlayer = () => {
    if (playerRef.current && !ytPlayerInstance.current) {
      ytPlayerInstance.current = new window.YT.Player(playerRef.current, {
        videoId: "puzvgHlI0iQ",
        events: { onStateChange },
        playerVars: {
          modestbranding: 1,
          rel: 0,
          controls: 0, // Hide default controls
          fs: 1,
        },
      });
    }
  };

  const onStateChange = (event) => {
    const YT = window.YT;
    if (event.data === YT.PlayerState.PLAYING) {
      setIsPlaying(true);
    } else if (
      event.data === YT.PlayerState.PAUSED ||
      event.data === YT.PlayerState.ENDED ||
      event.data === YT.PlayerState.CUED
    ) {
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (!ytPlayerInstance.current) return;
    const player = ytPlayerInstance.current;
    const YT = window.YT;
    const state = player.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <section className="media-section" aria-label="Music video player section">
      {/* Background static video */}
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
        <h1 className="media-title">New Music Coming Soon</h1>
        <p className="media-subtitle">
          While you wait, check out our latest music video!
        </p>

        <div
          className="video-container"
          role="region"
          aria-label="YouTube music video player"
        >
          <div
            id="youtube-player"
            ref={playerRef}
            className="youtube-iframe-wrapper"
          />
        </div>

        <button
          className="btn-play-toggle"
          onClick={togglePlay}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? "Pause ▶" : "Play ►"}
        </button>
      </div>
    </section>
  );
}

export default Media;
