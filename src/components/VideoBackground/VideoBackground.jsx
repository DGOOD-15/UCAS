import { useRef, useState, useEffect } from "react";
import slippinBG from "../../assets/slippinBG.jpg";
import videoBG from "../../assets/SLIPPIN-ON-7-NEW-PROMO-2.mp4";

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [showImage, setShowImage] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.play().catch(() => {
        video.muted = true;
        video.play();
      });
    }

    const handleEnded = () => {
      setShowImage(true);
    };

    video.addEventListener("ended", handleEnded);

    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="video-background" >
      {!showImage && (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={isMuted}
          style={{ width: "100%", height: "100%", objectFit: "contain", position: "absolute", top: 0, left: 0 }}
        >
          <source src={videoBG} type="video/mp4" />
        </video>
      )}

      {showImage && (
        <img
          src={slippinBG}
          alt="Slippin' On 7 Coming 9/17/25"
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: showImage ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        />
      )}

    </div>
  );
}