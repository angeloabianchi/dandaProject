import React from "react";
import "./Contact.css";
import vimeo from "../../static/img/vimeo.png";
import instagram from "../../static/img/instagram.png";

const Contacts = () => {
  return (
    <div className="contactPage">
      <div className="contact">
        <h4>EMAIL</h4>
        <h1 className="mb-5">danisancho87@gmail.com</h1>
        <h4>PHONE</h4>
        <h1 className="mb-5">+34 647 282 554</h1>
        <h4>SOCIAL MEDIAS</h4>
        <div className="socialMediaSection">
          <a className="d-flex justify-content-center" href="#">
            <img src={instagram} tag="instagram Icon" className="socialMediaIcons"/>
          </a>
          <a className="d-flex justify-content-center" href="#">
            <img src={vimeo} tag="Vimeo Icon" className="socialMediaIcons"/>
          </a>
        </div>
      </div>
    </div>
  );

};

export default Contacts;
