import React, { useEffect, useState, useRef } from "react";
import "./Media.css";
import staticBG from "../../assets/static.mp4";

function Media() {
  const playerRef = useRef(null);
  const ytPlayerInstance = useRef(null);
  const mediaFrameRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
    navigator.userAgent
  );

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
          showinfo: 0,
          fs: 1, // Show YouTube fullscreen button
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

  const toggleFullScreen = () => {
    const element = mediaFrameRef.current;
    if (!document.fullscreenElement) {
      element.requestFullscreen().catch((err) => {
        console.error("Fullscreen error:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="main__media-container">
      <video autoPlay loop muted playsInline className="tv-static-bg">
        <source src={staticBG} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="main__media-content">
        <p className="media-description">
          New music coming soon! While you wait check out our latest music
          video!
        </p>

        <div className="media-wrapper">
          <div className="media-frame" ref={mediaFrameRef}>
            <div className="media-screen">
              <div
                id="youtube-player"
                ref={playerRef}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

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

            {/* ✅ Show custom fullscreen only on mobile & not iOS */}
            {isMobile && !isIOS && (
              <button
                className="fullscreen-btn"
                onClick={toggleFullScreen}
                title="Toggle Fullscreen"
              >
                ⛶
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
