import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navigation.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const links = [
    { name: "About", path: "/about" },
    { name: "Media", path: "/media" },
    { name: "Merch", path: "/store" },
  ];

  return (
    <nav className="nav" ref={navRef}>
      <Link to="/" onClick={closeMenu}>
        <img src={logo} alt="logo" className="nav__logo" />
      </Link>

      <button
        className="nav__hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`nav__links ${isOpen ? "nav__links--open" : ""}`}>
        {location.pathname !== "/" && (
          <Link to="/" className="nav__link" onClick={closeMenu}>
            Home
          </Link>
        )}

        {links
          .filter((link) => link.path !== location.pathname)
          .map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav__link"
              onClick={closeMenu}
            >
              {link.name}
            </Link>
          ))}
      </div>
    </nav>
  );
}

export default Navigation;
