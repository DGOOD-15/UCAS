import "./Store.css";
import background from "../../assets/tshirt.jpg";
import { useState, useEffect } from "react";

function Store() {
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="store" style={{ minHeight: height }}>
      <h2 className="store__title">Merch Store Coming Soon</h2>
      <img className="store__background" src={background}></img>
    </div>
  );
}

export default Store;
