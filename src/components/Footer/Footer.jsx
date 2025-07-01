import "./Footer.css";
import facebook from "../../assets/facebook-icon.png";
import instagram from "../../assets/Instagram_icon.png";
import spotify from "../../assets/spotify-icon.png";
import apple from "../../assets/apple-icon.png";
import tiktok from "../../assets/tiktok-icon.png";
import youtube from "../../assets/youtube-icon.png";
import { useState, useEffect } from "react";
function Footer() {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 1200); // or 1000px depending on your breakpoints
    };

    handleResize(); // set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="footer">
      <h2 className="footer__logo"></h2>
      <section
        className={`footer__links ${mobileView ? "footer__links-mobile" : ""}`}
      >
        <a
          href="https://www.facebook.com/Undercloudsandsurveillance"
          aria-label="Visit Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="Facebook Icon" className="footer__icons" />
        </a>
        <a
          href="https://www.instagram.com/undercloudsandsurveillance/"
          aria-label="Visit Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram Icon" className="footer__icons" />
        </a>
        <a
          href="https://open.spotify.com/artist/5n09HWUql7tqWjKVRhvehn?si=QB94lAKGSZW9iEefRMOF7Q"
          aria-label="Visit Spotify"
          target="_blank"
          rel="noreferrer"
        >
          <img src={spotify} alt="Spotify Icon" className="footer__icons" />
        </a>
        <a
          href="https://music.apple.com/us/artist/under-clouds-and-surveillance/1460288311"
          aria-label="Visit Apple music"
          target="_blank"
          rel="noreferrer"
        >
          <img src={apple} alt="Apple Music Icon" className="footer__icons" />
        </a>
        <a
          href="https://www.youtube.com/@undercloudsandsurveillance1737"
          aria-label="Visit Apple music"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="Apple Music Icon" className="footer__icons" />
        </a>
        <a
          href="https://www.tiktok.com/@ucasmusic"
          aria-label="Visit TikTok"
          target="_blank"
          rel="noreferrer"
        >
          <img src={tiktok} alt="TikTok Icon" className="footer__icons" />
        </a>
      </section>
    </footer>
  );
}
export default Footer;
