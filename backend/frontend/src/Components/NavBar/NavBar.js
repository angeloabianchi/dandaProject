import React, { useState } from "react";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";
import DandaLogo from "../../static/img/DandaLogo2_500x500.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const currentLanguage = i18next.language;

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

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

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
            onClick={handleToggle}
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-dark">
              {isNavOpen ? (
                <FontAwesomeIcon
                  icon={faXmark}
                  size="2xl"
                  style={{
                    color: "#f5deb3",
                  }}
                  className="closeButton"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  size="xl"
                  style={{ color: "#f5deb3" }}
                />
              )}
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end navBarMenu"
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
          <div className="btn-group globeIcon">
            <div class="row">
              {languages.map(({ code, country_code }) => (
                <div className={`col ${code}`} key={country_code}>
                  <button
                    className={`dropdown-item languagueButtons ${
                      code === currentLanguage ? "selected" : ""
                    }`}
                    onClick={() => i18next.changeLanguage(code)}>
                    {code}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
