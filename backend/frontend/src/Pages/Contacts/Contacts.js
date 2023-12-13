import React from "react";
import "./Contact.css";
import vimeo from "../../static/img/vimeo.png";
import instagram from "../../static/img/instagram.png";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="contactPage">
      <div className="contact">
        <h4>{t("EMAIL")}</h4>
        <h1 className="mb-5">danisancho87@gmail.com</h1>
        <h4>{t("PHONE")}</h4>
        <h1 className="mb-5">+34 647 282 554</h1>
        <h4>{t("SOCIAL MEDIAS")}</h4>
        <div className="socialMediaSection">
          <a className="d-flex justify-content-center" href="https://www.instagram.com/danisancho87/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} tag="instagram Icon" className="socialMediaIcons"/>
          </a>
          <a className="d-flex justify-content-center" href="https://vimeo.com/danisanchoperis" target="_blank" rel="noopener noreferrer">
            <img src={vimeo} tag="Vimeo Icon" className="socialMediaIcons"/>
          </a>
        </div>
      </div>
    </div>
  );

};

export default Contacts;
