import React from "react";

import SlideCard from "./SlideCard/SlideCard";

import styles from "./SlideShow.module.css";

import slide1Src from "../../assets/images/Instant-Noodles.webp";
import slide2Src from "../../assets/images/JavaScript.webp";
import slide3Src from "../../assets/images/Jeans.webp";

const SlideShow = ({ slidePos }) => {
  return (
    <div className={styles.slideshow} style={{ left: `${slidePos}px` }}>
      <SlideCard
        title="SOME DUMMY NAME"
        desc="SOME DUMMY INFO"
        imageSrc={slide1Src}
        className={styles.slide}
      />
      <SlideCard
        title="SOME DUMMY NAME"
        desc="SOME DUMMY INFO"
        imageSrc={slide2Src}
        className={styles.slide}
      />
      <SlideCard
        title="SOME DUMMY NAME"
        desc="SOME DUMMY INFO"
        imageSrc={slide3Src}
        className={styles.slide}
      />
    </div>
  );
};

export default SlideShow;
