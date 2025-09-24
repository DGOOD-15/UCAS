import React, { useEffect, useState, useRef } from "react";
import "../Media/Media.css"; 

function YouTubePlayer({ videoId, playerId }) {
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
        videoId,
        events: { onStateChange },
        playerVars: {
          modestbranding: 1,
          rel: 0,
          controls: 0,
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
    <div
      className="video-container"
      role="region"
      aria-label="YouTube music video player"
    >
      <div
        id={playerId}
        ref={playerRef}
        className="youtube-iframe-wrapper"
      />
      <button
        className="btn-play-toggle"
        onClick={togglePlay}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? "Pause ▶" : "Play ►"}
      </button>
    </div>
  );
}

export default YouTubePlayer;