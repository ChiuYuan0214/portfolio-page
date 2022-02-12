import React from "react";

import SlideCard from "./SlideCard/SlideCard";
import { PROJECT_LIST } from "../../data/project";

import styles from "./SlideShow.module.css";

const SlideShow = ({ slidePos, clientX, clientY }) => {
  const cardList = PROJECT_LIST.map((prj) => {
    let { title, desc, imageSrc, demoUrl, githubUrl, tags } = prj;
    title = title.toUpperCase();
    desc = desc.toUpperCase();
    return (
      <SlideCard
        title={title}
        desc={desc}
        imageSrc={imageSrc}
        demoUrl={demoUrl}
        githubUrl={githubUrl}
        tags={tags}
        className={styles.slide}
        x={clientX}
        y={clientY}
      />
    );
  });
  return (
    <div className={styles.slideshow} style={{ left: `${slidePos}px` }}>
      {cardList}
    </div>
  );
};

export default SlideShow;
