import React from "react";
import "./About.css";
import dani from "../../static/img/daniSancho.jpeg";
import daniTwo from "../../static/img/daniSancho2.jpeg";
import daniThree from "../../static/img/daniSancho3.jpeg";

const About = () => {
  return (
    <div className="aboutPage">
      <div class="container d-flex align-items-center justify-content-center">
        <div class="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-5 imageOne">
            <img src={dani} className="daniPhoto" />
          </div>
          <div className="col-lg-6 col-md-12 mb-5 dandaAboutText textOne">
            <p>
              {/* Nacido en Barcelona en 1987, Daniel es un apasionado director y
              productor español que se graduó en cinematografía en la
              prestigiosa ESCAC (Escuela de Cine y Audiovisuales de Cataluña).
              Tras obtener su título, embarcó en una emocionante travesía en la
              industria cinematográfica. */}
              Nacido en Barcelona en 1987, es un director y productor español de
              ascedencia francesa. Se graduó en cinematografía en la ESCAC
              (Escuela de Cine y Audiovisuales de Cataluña) y poco después se
              instaló en Los Ángeles donde estuvo rodando videoclips, anuncios y
              documentales. Cuando volvió a Barcelona, su amplia visión del
              sector y su personalidad inquieta le han llevado a transitar entre
              la publicidad, el documental el cine y la televisión.
            </p>
            <p>
              {/* Su búsqueda de conocimiento lo llevó a Los Ángeles, donde sumergió
              sus habilidades en la dirección de anuncios y videoclips,
              descubriendo una perspectiva más holística del proceso
              cinematográfico. Esta experiencia internacional marcó un punto de
              inflexión en su carrera, proporcionándole una visión única y
              enriquecedora. */}
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
          <div className="col-lg-6 col-md-12 dandaAboutText textTwo">
            <p>
              {/* Su búsqueda de conocimiento lo llevó a Los Ángeles, donde sumergió
              sus habilidades en la dirección de anuncios y videoclips,
              descubriendo una perspectiva más holística del proceso
              cinematográfico. Esta experiencia internacional marcó un punto de
              inflexión en su carrera, proporcionándole una visión única y
              enriquecedora. */}
              Ha trabajado en documentales y programas de televisión adquiridos
              por TVE, TV3, Flooxer, Spotify y Amazon Prime Video.
            </p>
            <p>
              {/* Dirigiendo campañas para el Ayuntamiento de Barcelona durante dos
              años, Daniel aportó su creatividad a proyectos publicitarios
              diversos, colaborando con marcas nacionales e internacionales como
              AXA, Levis, Lidl, San Pellegrino, Tesla, Amazon, El Pavo, Danone,
              y muchas más. Su excepcional trabajo fue reconocido con un
              prestigioso premio Laus en la categoría de dirección. */}
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
          <div className="col-lg-6 col-md-12 mb-5 imageTwo">
            <img src={daniTwo} className="daniPhoto" />
          </div>
          <div className="col-lg-6 col-md-12 imageThree">
            <img src={daniThree} className="daniPhoto" />
          </div>
          <div className="col-lg-6 col-md-12 dandaAboutText textThree">
            <p>
              {/* Actualmente, Daniel es asociado de la productora Atomic Beat,
              donde se embarca en nuevos desafíos. Participa activamente en la
              creación de programas para TV3 y en el desarrollo de contenido
              para televisión y plataformas. Entre sus proyectos actuales se
              encuentran "Movidos por el deporte," una serie documental, y
              "Dreamland," un cautivador largometraje que aborda la inmigración
              africana. */}
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
