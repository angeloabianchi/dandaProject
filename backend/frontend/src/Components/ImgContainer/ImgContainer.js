import React, { useState, useEffect } from "react";
import "./ImgContainer.css";

const ImgContainer = ({ frames, onLoad }) => {
  const [index, setIndex] = useState(0);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  const [addAnimation, setAddAnimation] = useState(null);
  const [initialDisplay, setInitialDisplay] = useState(true);

  useEffect(() => {
    const displayNextImage = () => {
      // Calculate the next image index to display
      const nextIndex = (index + 1) % frames.length;
      setIndex(nextIndex);
    };

    let displayTime = getDisplayTime(); // Get a dynamic display time

    if (index === 0) {
      displayTime += 2000;
      if(initialDisplay) {
        setTimeout(() => {
          setAddAnimation('blink');
        }, 1000);
      } else {
        setTimeout(() => {
          setAddAnimation('blink');
        }, 500);
      }

    }
    const interval = setInterval(displayNextImage, displayTime);

    return () => {
      clearInterval(interval);
      setAddAnimation(null);
      setInitialDisplay(false);
    };
  }, [index, frames]);

  const getDisplayTime = () => {
    return Math.random() * 500 + 100; // Random display time between 500ms and 1500ms
  };

  const handleImageLoaded = () => {
    setLoadedImagesCount((prevCount) => prevCount + 1);
    if (loadedImagesCount === frames.length - 1) {
      onLoad();
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      {frames && frames.length > 0 && (
        <div>
          <img
            className={addAnimation ? `dinamycImages ${addAnimation}` : "dinamycImages"}
            src={`${frames[index].url}`}
            onLoad={handleImageLoaded}
          />
        </div>
      )}
    </div>
  );
};

export default ImgContainer;
