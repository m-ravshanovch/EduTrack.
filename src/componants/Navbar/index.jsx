import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        if (e.clientX <= 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setIsOverlayVisible(false);
        }
      } else {
        if (e.clientX < 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed top-0 left-0 z-10 transition-transform duration-700 ease-in-out h-full w-full sm:w-60 gap-y-5 place-content-center ${isVisible ? "translate-x-0" : "-translate-x-full "
          } bg-zinc-600`}
      >
        <nav className="flex justify-center">
          <ul className="flex-row gap-y-8 p-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Golary" className="text-white hover:text-gray-300 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/Users" className="text-white hover:text-gray-300 transition">
                Users
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="text-white hover:text-gray-300 transition">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
