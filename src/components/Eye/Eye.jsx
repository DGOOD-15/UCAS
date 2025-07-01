import React, { useEffect, useRef } from "react";
import "./Eye.css";

export default function Eye({ onEnter }) {
  const irisRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const eye = irisRef.current?.parentElement;
      const rect = eye.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const angle = Math.atan2(dy, dx);

      const maxRadius = rect.width / 2 - 50; // limit to edge
      const x = Math.cos(angle) * Math.min(maxRadius, Math.abs(dx));
      const y = Math.sin(angle) * Math.min(maxRadius, Math.abs(dy));

      irisRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = () => {
    if (onEnter) onEnter();
  };

  return (
    <div className="eye-container" onClick={handleClick}>
      <div className="eye">
        <div className="iris" ref={irisRef}>
          <div className="pupil"></div>
        </div>
        <div className="eye-shine"></div>
      </div>
      <p className="enter-label">Enter...</p>
    </div>
  );
}
