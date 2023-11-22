import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import DandaLogo from "../../static/img/DandaLogo2_500x500.png";
import navBarBackground from "../../static/video/navbarBackground.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="NavBarContainer">
      {/* <div className="videoNavBar">
        <video className="video" preload="true" autoPlay loop muted>
          <source src={navBarBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container-fluid">
          <Link to={"/"} className="logoLink">
            <div className="logoWrapper">
              <img className="logoImage" src={DandaLogo} alt="Danda Logo" />
            </div>
          </Link>
          <button
            class="navbar-toggler"
            style={
              {
                /* color: "#f5deb3", */
              }
            }
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon navbar-dark">
              <FontAwesomeIcon
                icon={faBars}
                size="xl"
                style={{ color: "#f5deb3" }}
              />
            </span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active"
                  className={`NavBarLinks ${
                    location.pathname === "/" ? "selected" : ""
                  }`}
                  to="/">
                  <span>Work</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  className={`NavBarLinks ${
                    location.pathname === "/about" ? "selected" : ""
                  }`}
                  to="/about">
                  <span>About</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  className={`NavBarLinks ${
                    location.pathname === "/contacts" ? "selected" : ""
                  }`}
                  to="/contacts">
                  <span>Contacts</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
