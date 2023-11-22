import React from "react";
import "./Loading.css";
import DandaLogo from "../../static/img/DandaLogo2_500x500.png";

const Loading = () => {
  return (
    <div
      class="container text-center"
      className="loadingPage"
      style={{ maxWidth: "100%" }}>
      <img className="loadingLogoImage" src={DandaLogo} alt="Danda Logo" />
    </div>
  );
};

export default Loading;
