import React, { useState, useRef, useEffect } from "react";

import ProjectModal from "../../ProjectModal/ProjectModal";
import StringReducer from "../../UI/StringReducer/StringReducer";

import styles from "./SlideCard.module.css";

const SlideCard = ({ title, desc, imageSrc, demoUrl, githubUrl, tags, className, x, y }) => {
  // inherit clientX and clientY through props.
  const [isZoom, setIsZoom] = useState(false);
  const [onModal, setOnModal] = useState(false);
  const [descOnShow, setDescOnShow] = useState(false);

  const cardRef = useRef();
  const descRef = useRef();

  const viewWidth = window.innerWidth;

  const mouseEnterHandler = () => {
    setIsZoom(true);
  };

  const mouseLeaveHandler = () => {
    setIsZoom(false);
  };

  const toggleModalHandler = () => {
    setOnModal((prev) => !prev);
  };

  // to check if the click position match within the card.
  useEffect(() => {
    const minX = cardRef.current.getBoundingClientRect().x;
    const maxX = minX + cardRef.current.offsetWidth;
    const minY = cardRef.current.getBoundingClientRect().y;
    const maxY = minY + cardRef.current.offsetHeight;
    if (x >= minX && x <= maxX && y > minY && y < maxY) {
      setOnModal(true);
    }
  }, [x, y]);

  // to check the current position of card, for desc displaying.
  let descLeft = null;
  if (descRef.current) {
    descLeft = descRef.current.getBoundingClientRect().x;
  }

  // set descOnShow to true if desc is within viewport.
  useEffect(() => {
    if (descLeft && descLeft < viewWidth * 0.7 && descLeft > viewWidth * -0.3) {
      setDescOnShow(true);
    } else {
      setDescOnShow(false);
    }
  }, [viewWidth, descLeft]);

  return (
    <>
      <div
        className={`${styles.card} ${className}`}
        onMouseOver={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        ref={cardRef}
      >
        <img
          src={imageSrc}
          alt={title}
          className={isZoom ? styles.onScale : ""}
        />
        <div className={styles.info}>
          <h3 style={isZoom ? { color: "red" } : {}}>{title}</h3>
          <p ref={descRef}>
            {descOnShow && <StringReducer string={desc} enlarge={true} />}
          </p>
        </div>
      </div>
      <ProjectModal
        onModal={onModal}
        title={title}
        imageSrc={imageSrc}
        desc={desc}
        demoUrl={demoUrl}
        githubUrl={githubUrl}
        tags={tags}
        onClose={toggleModalHandler}
      />
    </>
  );
};

export default SlideCard;
