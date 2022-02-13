import React, { useRef, useEffect } from "react";

import movieSrc from "../../../assets/movies/E-commerce.mp4";

const Project1Movie = () => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 1000);
  }, []);
  return (
    <video muted controls ref={videoRef}>
      <source src={movieSrc} type="video/mp4" />
      Your browser did not support the video format.
    </video>
  );
};

export default Project1Movie;
