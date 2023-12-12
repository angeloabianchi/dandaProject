import React, { useState, useEffect } from "react";
import "./Project.css";
import { dataFetch } from "../../Components/DataFetch/DataFetch";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

const Project = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  const projName = pathname.split("/").pop(); // Get the project name from the URL
  const [project, setProject] = useState();
  const [photos, setPhotos] = useState();
  const requests = ["project", "photos"];
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const GetData = async () => {
      try {
        for (const type of requests) {
          const data = await dataFetch(type, projName);
          if (!data && type === "project") {
            setError(`Project "${projName}" not found`);
            return;
          }
          if (type === "project") {
            setProject(data);
          } else {
            setPhotos(data);
          }
        }
      } catch (error) {
        console.error(`Error fetching data:`, error);
        setError(`${error.message}`);
      }
    };

    setTimeout(async () => {
      await GetData();
    }, 1000);
  }, [projName]);

  const backToHome = () => {
    navigate("/");
  };

  if (error) {
    return (
      <div className="errorPage">
        <h1>
          {projName} Project Not Found - {error}
        </h1>
        <button onClick={backToHome}>Back To Home</button>
      </div>
    );
  } else {
    return (
      <div className="ProjectContainer">
        {project && photos ? (
          <>
            <div className="project">
              <h1 className="title">
                {project.name.replace(/-/g, " ").replace(/_/g, "-")}
              </h1>
              <div class="w-100 iframeVideo">
                <iframe
                  src={`https://player.vimeo.com/video/${project.video}?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479`}
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  title={project.name
                    .replace(/-/g, " ")
                    .replace(/_/g, "-")}></iframe>
              </div>
              <script src="https://player.vimeo.com/api/player.js"></script>
              {project.description === "" ? (
                <div></div>
              ) : (
                <div className="d-flex align-items-center justify-content-center projectDescription">
                  <p className="description">{project.description}</p>
                </div>
              )}
              <div className="photoContainer">
                <div id="carouselFade" class="carousel slide carousel-fade">
                  <div class="carousel-inner">
                    {photos &&
                      photos.map((photo, index) => (
                        <div
                          class={
                            index === 0
                              ? "carousel-item active"
                              : "carousel-item"
                          }>
                          <img
                            src={photo.url}
                            class="d-block img-fluid"
                            className="photoImage"
                            alt="project image"
                          />
                        </div>
                      ))}
                  </div>
                  {photos &&
                    photos.length > 1 && ( // Check if photos array has more than one item
                      <>
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
                      </>
                    )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    );
  }
};

export default Project;
