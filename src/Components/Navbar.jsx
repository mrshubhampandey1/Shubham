import React from "react";
import Shubham_logo from "../assets/shubham_logo_clean.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="home" smooth={true}>
              SHUBHAM
            </Link>
          </li>
          <li className={showMobileMenu ? "showOnMobile" : "hideonmobile"}>
            <Link to="about" smooth={true}>
              About
            </Link>
          </li>
          <li className={showMobileMenu ? "showOnMobile" : "hideonmobile"}>
            <Link to="experience" smooth={true}>
              Experience
            </Link>
          </li>
          <li className={showMobileMenu ? "showOnMobile" : "hideonmobile"}>
            <Link to="education" smooth={true}>
              Education
            </Link>
          </li>
          <li className={showMobileMenu ? "showOnMobile" : "hideonmobile"}>
            <Link to="skills" smooth={true}>
              Skills
            </Link>
          </li>
          <li className={showMobileMenu ? "showOnMobile" : "hideonmobile"}>
            <Link to="certification" smooth={true}>
              Certifications
            </Link>
          </li>

          <li className={showMobileMenu ? "showOnMobile" : "hideonmobile"}>
            <Link to="achievement" smooth={true}>
              Achievements
            </Link>
          </li>

          <li
            className="HamIcon"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <GiHamburgerMenu />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default React.memo(Navbar);
