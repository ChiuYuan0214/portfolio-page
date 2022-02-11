import React, { useState, useRef, useEffect } from "react";

import ProjectModal from "../../ProjectModal/ProjectModal";
import StringReducer from "../../UI/StringReducer/StringReducer";

import styles from "./SlideCard.module.css";

const SlideCard = ({ title, desc, imageSrc, className, x, y }) => {
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

  useEffect(() => {
    const minX = cardRef.current.getBoundingClientRect().x;
    const maxX = minX + cardRef.current.offsetWidth;
    const minY = cardRef.current.getBoundingClientRect().y;
    const maxY = minY + cardRef.current.offsetHeight;
    if (x >= minX && x <= maxX && y > minY && y < maxY) {
      setOnModal(true);
    }
  }, [x, y]);

  let descLeft = null;
  if (descRef.current) {
    descLeft = descRef.current.getBoundingClientRect().x;
  }

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
        onClose={toggleModalHandler}
      />
    </>
  );
};

export default SlideCard;
