import { useEffect, useState } from "react";
import background from "../../assets/about-bg.jpg";
import "./Main.css";
import VideoBackground from "../VideoBackground/VideoBackground";

function Main() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="main">
      {isMobile ? (
        <VideoBackground autoPlaySound={true} />
      ) : (
        <img className="main__bg-image" src={background} alt="The band image" />
      )}
    </main>
  );
}

export default Main;
