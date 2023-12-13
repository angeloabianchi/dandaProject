import React from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import DandaLogo from "../../static/img/DandaLogo2_500x500.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import globeIcon from "../../static/img/globe.png";
import "flag-icon-css/css/flag-icons.min.css";

const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const languages = [
    {
      code: "es",
      name: "Español",
      country_code: "es",
    },
    {
      code: "en",
      name: "English",
      country_code: "gb",
    },
  ];

  return (
    <div className="NavBarContainer">
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
                  <span>{t("Work")}</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  className={`NavBarLinks ${
                    location.pathname === "/about" ? "selected" : ""
                  }`}
                  to="/about">
                  <span>{t("About")}</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  className={`NavBarLinks ${
                    location.pathname === "/contact" ? "selected" : ""
                  }`}
                  to="/contact">
                  <span>{t("Contact")}</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-group dropstart globeIcon">
            <button
              class="btn btn-link dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white" }}>
              <img src={globeIcon} style={{width: "20px"}} />
            </button>
            <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-left">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                    class="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}>
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
