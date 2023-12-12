import React, { useState } from "react";
import "./About.css";
import Loading from "../../Components/Loading/Loading";
import dani from "../../static/img/daniSancho.jpeg";
import daniTwo from "../../static/img/daniSancho2.jpeg";
import daniThree from "../../static/img/daniSancho3.jpeg";
import daniFour from "../../static/img/daniSancho4.jpeg";

const About = () => {
  const [imagesLoaded, setImagesLoaded] = useState({
    dani: false,
    daniTwo: false,
    daniThree: false,
    daniFour: false,
  });

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
              Nacido en Barcelona en 1987, es un director y productor español de
              ascedencia francesa. Se graduó en cinematografía en la ESCAC
              (Escuela de Cine y Audiovisuales de Cataluña) y poco después se
              instaló en Los Ángeles donde estuvo rodando videoclips, anuncios y
              documentales. Cuando volvió a Barcelona, su amplia visión del
              sector y su personalidad inquieta le han llevado a transitar entre
              la publicidad, el documental el cine y la televisión.
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
              Después de trabajar para las principales productoras catalanas
              entra como jefe de vídeo en Playground, una agencia de publicidad
              y medio digital líder en España. Ahí puede desarrollar al máximo
              su creatividad dedicándose a innovadores proyectos audiovisuales,
              generalmente relacionados con temas sociales documentales y
              proyectos publicitarios de lo más diversos; pudiendo trabajar para
              su propia ciudad, dirigiendo las campañas publicitarias del
              Ayuntamiento de Barcelona durante dos años.
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
              Ha trabajado en documentales y programas de televisión adquiridos
              por TVE, TV3, Flooxer, Spotify y Amazon Prime Video.
            </p>
            <p>
              En publicidad ha trabajado para marcas nacionales e
              internacionales como AXA, Levis, Lidl, San Pellegrino, Tesla,
              Amazon, El Pavo, Danone, Panrico, Moritz y Playz. Destacando un
              premio Laus como director.
            </p>
            <p>
              Actualmente está en fase de desarrollo con A3 Media para dirigir
              su primer largometraje de ficción basado en la novela Viaje al
              País de los Blancos. La película está confirmada.
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
              Dani es una persona entregada al máximo en todo lo que hace. Ama
              esta profesión y todo lo que conlleva. Es sensible, enérgico y
              creativo. Es un apasionado del mundo que lo rodea y de su gente.
              Ha viajado a más de 45 países, amante del deporte extremo y de la
              naturaleza. Todo esto hace que le encante vincularse a proyectos
              creativos que aporten algo más a la sociedad. Su background, su
              sensibilidad y su amplio conocimiento del sector audiovisual le
              hacen capaz de liderar cualquier producción como director o
              productor ejecutivo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
