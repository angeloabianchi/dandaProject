import React, { useState, useEffect } from "react";
import './ImgContainer.css'

const ImgContainer = ({ projects }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const displayNextImage = () => {
      // Calculate the next image index to display
      const nextIndex = (currentImageIndex + 1) % projects.length;
      setCurrentImageIndex(nextIndex);
    };

    const displayTime = getDisplayTime(); // Get a dynamic display time
    const interval = setInterval(displayNextImage, displayTime);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex, projects]);

  const getDisplayTime = () => {
    return Math.random() * 600 + 100; // Random display time between 500ms and 1500ms
  };

  return (
    <div className="container d-flex justify-content-center">
      {projects && projects.length > 0 && (
        <div
          alt={projects[currentImageIndex].name}
          className="dinamycImages"
          style={{
            backgroundImage: `url(${projects[currentImageIndex].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "650px",
          }}
        >
        </div>
      )}
    </div>
  );
};

export default ImgContainer;
