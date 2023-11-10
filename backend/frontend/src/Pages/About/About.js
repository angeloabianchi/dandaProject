import React from "react";
import "./About.css";
import dani from '../../static/img/daniSancho.png'

const About = () => {
  return (
    <div className="aboutPage">
      <div class="container d-flex align-items-center justify-content-center h-100 ">
        <div class="row align-items-center">
          <div className="col">
            <p>
              Nacido en Barcelona en 1987, es un director y productor español.
              Se graduó en cinematografía en la ESCAC (Escuela de Cine y
              Audiovisuales de Cataluña) y poco después se instaló en Los
              Ángeles donde estuvo rodando anuncios y sobretodo videoclips. Ahí
              aprendió otra manera de trabajar, más holística. Cuando volvió a
              Barcelona, su amplia visión del sector y su personalidad inquieta
              le han llevado a transitar entre la publicidad, el documental y la
              televisión. Después de trabajar para las principales productoras
              catalanas, entra como jefe de vídeo en Playground, una agencia de
              publicidad y medio digital líder en España. Ahí puede desarrollar
              su potencial dedicándose a innovadores proyectos audiovisuales,
              generalmente relacionados con temas sociales, y proyectos
              publicitarios de lo más diversos; pudiendo trabajar para su
              querida ciudad, dirigiendo las campañas publicitarias del
              Ayuntamiento de Barcelona durante dos años. Asimismo, ha rodado
              para marcas nacionales e internacionales como AXA, Levis, Lidl,
              San Pellegrino, Tesla, Amazon, El Pavo, Danone, Panrico, Ambar,
              Saupiquet, Moritz y Playz. Destacando un premio Laus como
              director. Ha trabajado en documentales que han sido adquiridos por
              TVE, TV3, Flooxer, Spotify y Amazon Prime Video. Actualmente, es
              asociado de una productora de nueva creación, Atomic Beat, en la
              que están produciendo dos programas para TV3 y desarrollando
              contenido para televisión y plataformas. Concretamente Daniel
              tiene dos proyectos en desarrollo, una serie documental llamada
              Movidos por el deporte; y Dreamland, un largometraje que trata
              sobre la inmigración africana.
            </p>
          </div>
          <div className="col">
            <img src={dani} className="daniPhoto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
