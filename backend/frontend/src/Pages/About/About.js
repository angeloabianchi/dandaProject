import React from "react";
import "./About.css";
import dani from "../../static/img/daniSancho.png";
import daniTwo from "../../static/img/daniSancho2.png";
import daniThree from "../../static/img/daniSancho3.png";

const About = () => {
  return (
    <div className="aboutPage">
      <div class="container d-flex align-items-center justify-content-center">
        <div class="row align-items-center">
          <div className="col-6">
            <img src={dani} className="daniPhoto" />
          </div>
          <div className="col-6 dandaAboutText">
            <p>
              Nacido en Barcelona en 1987, Daniel es un apasionado director y
              productor español que se graduó en cinematografía en la
              prestigiosa ESCAC (Escuela de Cine y Audiovisuales de Cataluña).
              Tras obtener su título, embarcó en una emocionante travesía en la
              industria cinematográfica.
            </p>
            <p>
              Su búsqueda de conocimiento lo llevó a Los Ángeles, donde sumergió
              sus habilidades en la dirección de anuncios y videoclips,
              descubriendo una perspectiva más holística del proceso
              cinematográfico. Esta experiencia internacional marcó un punto de
              inflexión en su carrera, proporcionándole una visión única y
              enriquecedora.
            </p>
          </div>
          <div className="col-6 dandaAboutText">
            <p>
              Su búsqueda de conocimiento lo llevó a Los Ángeles, donde sumergió
              sus habilidades en la dirección de anuncios y videoclips,
              descubriendo una perspectiva más holística del proceso
              cinematográfico. Esta experiencia internacional marcó un punto de
              inflexión en su carrera, proporcionándole una visión única y
              enriquecedora.
            </p>
            <p>
              Dirigiendo campañas para el Ayuntamiento de Barcelona durante dos
              años, Daniel aportó su creatividad a proyectos publicitarios
              diversos, colaborando con marcas nacionales e internacionales como
              AXA, Levis, Lidl, San Pellegrino, Tesla, Amazon, El Pavo, Danone,
              y muchas más. Su excepcional trabajo fue reconocido con un
              prestigioso premio Laus en la categoría de dirección.
            </p>
          </div>
          <div className="col-6">
            <img src={daniTwo} className="daniPhoto" />
          </div>
          <div className="col-6">
            <img src={daniThree} className="daniPhoto" />
          </div>
          <div className="col-6 dandaAboutText">
            <p>
              Daniel ha dejado su marca en el ámbito documental, con obras
              adquiridas por TVE, TV3, Flooxer, Spotify y Amazon Prime Video. Su
              enfoque en proyectos relacionados con temas sociales demuestra su
              compromiso con la narración visual que impacta y resuena con la
              audiencia.
            </p>
            <p>
              Actualmente, Daniel es asociado de la productora Atomic Beat,
              donde se embarca en nuevos desafíos. Participa activamente en la
              creación de programas para TV3 y en el desarrollo de contenido
              para televisión y plataformas. Entre sus proyectos actuales se
              encuentran "Movidos por el deporte," una serie documental, y
              "Dreamland," un cautivador largometraje que aborda la inmigración
              africana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
