import React, { useEffect, useState, useRef } from "react";
import "./Media.css";

function Media() {
  const playerRef = useRef(null); // div container for YT player
  const ytPlayerInstance = useRef(null); // store YouTube Player object
  const [isPlaying, setIsPlaying] = useState(false);

  // Load YouTube Iframe API once
  useEffect(() => {
    if (window.YT && window.YT.Player) {
      initializePlayer();
    } else {
      // Dynamically load YouTube iframe API script
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      tag.async = true;
      document.body.appendChild(tag);

      // API calls this function when script loads
      window.onYouTubeIframeAPIReady = initializePlayer;
    }

    // Cleanup function to remove player on unmount
    return () => {
      if (ytPlayerInstance.current) {
        ytPlayerInstance.current.destroy();
        ytPlayerInstance.current = null;
      }
    };
  }, []);

  // Initialize YouTube player
  const initializePlayer = () => {
    if (playerRef.current && !ytPlayerInstance.current) {
      ytPlayerInstance.current = new window.YT.Player(playerRef.current, {
        videoId: "puzvgHlI0iQ", // <-- Your YouTube Video ID here
        events: {
          onStateChange: onPlayerStateChange,
        },
        playerVars: {
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
        },
      });
    }
  };

  // Track playing state to toggle knob glow
  const onPlayerStateChange = (event) => {
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

  // Toggle play/pause when knob clicked
  const togglePlay = () => {
    const player = ytPlayerInstance.current;
    if (!player) return;

    const YT = window.YT;
    const state = player.getPlayerState();

    if (state === YT.PlayerState.PLAYING) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <div className="main__media-container">
      <video autoPlay loop muted playsInline className="tv-static-bg">
        <source src="/static.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="main__media-content">
        <p className="media-description">
          New music coming soon! While you wait check out our latest music
          video!
        </p>
        <div className="media-wrapper">
          <div className="media-frame">
            <div className="media-screen">
              {/* This div is replaced by the YouTube iframe */}
              <div
                id="youtube-player"
                ref={playerRef}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Knobs: clickable to toggle play/pause */}
            <div
              className="media-knobs"
              onClick={togglePlay}
              style={{ cursor: "pointer" }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && togglePlay()}
            >
              <div className={`media-knob ${isPlaying ? "on" : ""}`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
