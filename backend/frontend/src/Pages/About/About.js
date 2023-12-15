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

  const dandaImages = [
    { src: daniTwo, key: "daniTwo" },
    { src: daniThree, key: "daniThree" },
    { src: daniFour, key: "daniFour" }
  ];

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
        {/*         <div class="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-5 imageContainer">
            <img
              src={dani}
              className="daniPhoto"
              onLoad={() => handleImageLoad("dani")}
            />
          </div>
          <div className="col-lg-6 col-md-12 mb-5 dandaAboutText">
            <p>
              {t("aboutTextOne")}
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
        </div> */}
        <div>
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 imageContainer">
              <img
                src={dani}
                className="daniPhoto"
                onLoad={() => handleImageLoad("dani")}
              />
            </div>
            <div className="col-lg-6 col-md-12 mb-5 dandaAboutText">
              <p>{t("aboutTextOne")}</p>
              <p>{t("aboutTextTwo")}</p>
              <p>{t("aboutTextThree")}</p>
              <p>{t("aboutTextFour")}</p>
              <p>{t("aboutTextFive")}</p>
              <p>{t("aboutTextSix")}</p>
            </div>
          </div>
          <div className="row mt-5">
            <div id="carouselFade" class="carousel slide carousel-fade">
                  <div class="carousel-inner">
                    {dandaImages &&
                      dandaImages.map((photo, index) => (
                        <div
                        class={`carousel-item ${index === 0 ? 'active' : ''} d-flex justify-content-center`}>
                          <img
                            src={photo.src}
                            onLoad={() => handleImageLoad(photo.key)}
                            className="d-block img-fluid daniCarouselPhotos"
                            alt="project image"
                          />
                        </div>
                      ))}
                  </div>
                  <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselFade"
                          data-bs-slide="prev">
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselFade"
                          data-bs-slide="next">
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
