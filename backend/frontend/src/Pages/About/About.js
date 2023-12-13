import React, { useState } from "react";
import "./About.css";
import Loading from "../../Components/Loading/Loading";
import dani from "../../static/img/daniSancho.jpeg";
import daniTwo from "../../static/img/daniSancho2.jpeg";
import daniThree from "../../static/img/daniSancho3.jpeg";
import daniFour from "../../static/img/daniSancho4.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    dani: false,
    daniTwo: false,
    daniThree: false,
    daniFour: false,
  });

  const { t } = useTranslation();

  const allImagesLoaded = Object.values(imagesLoaded).every((image) => image);

  const handleImageLoad = (imageKey) => {
    setImagesLoaded((prevState) => ({
      ...prevState,
      [imageKey]: true,
    }));
  };

  return (
    <div className="aboutPage mt-5">
      {!allImagesLoaded && <Loading />}
      <div
        class={`container d-flex align-items-center justify-content-center ${
          allImagesLoaded ? "d-block" : "d-none"
        }`}>
        <div class="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-5 imageContainer">
            <img
              src={dani}
              className="daniPhoto"
              onLoad={() => handleImageLoad("dani")}
            />
          </div>
          <div className="col-lg-6 col-md-12 mb-5 dandaAboutText">
            <p>
              {t("aboutTextOne")}  {/* public/assets/locale/{language}/translation.json */}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-5 imageContainer">
            <img
              src={daniTwo}
              className="daniPhoto"
              onLoad={() => handleImageLoad("daniTwo")}
            />
          </div>
          <div className="col-lg-6 col-md-12 mb-5 dandaAboutText">
            <p>
              {t("aboutTextTwo")}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-5 imageContainer">
            <img
              src={daniThree}
              className="daniPhoto"
              onLoad={() => handleImageLoad("daniThree")}
            />
          </div>
          <div className="col-lg-6 col-md-12 mb-5 dandaAboutText">
            <p>
              {t("aboutTextThree")}
            </p>
            <p>
            {t("aboutTextFour")}
            </p>
            <p>
            {t("aboutTextFive")}
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mb-5 imageContainer">
            <img
              src={daniFour}
              className="daniPhoto"
              onLoad={() => handleImageLoad("daniFour")}
            />
          </div>
          <div className="col-lg-6 col-md-12 mb-5 dandaAboutText">
            <p>
            {t("aboutTextSix")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
