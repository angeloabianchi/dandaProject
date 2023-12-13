import React, { useEffect, useState } from "react";
import "./Home.css";
import { dataFetch } from "../../Components/DataFetch/DataFetch";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import ImgContainer from "../../Components/ImgContainer/ImgContainer";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [projects, setProjects] = useState();
  const [frames, setFrames] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const GetProjects = async () => {
      try {
        const data = await dataFetch("initial");
        setProjects(data);
        setDataLoaded(true);
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    };

    const GetFrames = async () => {
      try {
        const dataFrames = await dataFetch("frames");
        setFrames(dataFrames);
      } catch (error) {
        console.error(`Error fetching data:`, error);
      }
    };

    setTimeout(async () => {
      await GetProjects();
      await GetFrames();
    }, 1000);
  }, []);

  const allImagesLoaded = () => {
    setImagesLoaded(true);
  };

  return (
    <div
      class="container text-center"
      className="homePage"
      style={{ maxWidth: "100%" }}>
      {!projects ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className="homeContent">
          <div class="mb-5">
            <ImgContainer frames={frames} onLoad={allImagesLoaded} />
          </div>
          <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
            {projects &&
              projects.map((project) => (
                <div className="projectBox" key={project.name}>
                  {project.video !== "" ? (
                    <Link to={"/project/" + project.name} className="link">
                      <div
                        className="col"
                        style={{
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          height: "400px",
                        }}>
                        <div className="homeTitle">
                          <h1>
                            {project.name.replace(/-/g, " ").replace(/_/g, "-")}
                          </h1>
                          <h3>{t(`${project.category}`)}</h3>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div
                      className="grayscale link"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "400px",
                      }}>
                      <div className="homeTitle">
                        <h1>
                          {project.name.replace(/-/g, " ").replace(/_/g, "-")}
                        </h1>
                        <h1>COMING SOON</h1>
                        <h3>{t(`${project.category}`)}</h3>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
