import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import DandaLogo from "../../static/img/DandaLogo2_500x500.png";


const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="FooterContainer">
      <div className="footerContent">
        <div className="footerLeft w-100">
          <p>&#169;{year}-DANI </p>
        </div>
        <div className="footerRight w-100">
          <Link to={"/"} className="logoLinkFooter">
            <img className="logoImageFooter" src={DandaLogo} alt="Danda Logo" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
