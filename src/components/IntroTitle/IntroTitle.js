import React, { useState, useEffect } from "react";

import styles from "./IntroTitle.module.css";

const startSlidePoint = 1500;

const IntroTitle = ({ slideChange, height, rate }) => {
  const [title1X, setTitle1X] = useState(-500);
  const [title2X, setTitle2X] = useState(1800);
  const [title1Y, setTitle1Y] = useState(200);
  const [title2Y, setTitle2Y] = useState(280);

  useEffect(() => {
    if (slideChange || (height >= startSlidePoint && height <= startSlidePoint + 900 * rate)) {
      setTitle1X(-500 + (height - startSlidePoint) / rate);
    }
    if (slideChange || (height >= startSlidePoint && height <= startSlidePoint + 1300 * rate)) {
      setTitle2X(1800 - (height - startSlidePoint) / rate);
    }

    const maxDistance = startSlidePoint + 1000 * rate + 6800;

    if (height >= maxDistance && height <= maxDistance + 600) {
      console.log("set in condition1");
      console.log("height:", height);
      setTitle1Y(200 - height + maxDistance);
      setTitle2Y(280 - height + maxDistance);
    } else if (slideChange && height < maxDistance) {
      console.log('set in condition2');
      setTitle1Y(200);
      setTitle2Y(280);
    } else if (slideChange && height > maxDistance + 600) {
      console.log("set in condition3");
      console.log("height:", height);
      setTitle1Y(200 - 600);
      setTitle2Y(280 - 600);
    }
  }, [height, rate, slideChange]);
  
  return (
    <>
      <h2
        className={styles.title1}
        style={{ left: `${title1X}px`, top: `${title1Y}px` }}
      >
        SEE MY
      </h2>
      <h2
        className={styles.title2}
        style={{ left: `${title2X}px`, top: `${title2Y}px` }}
      >
        PROJECT
      </h2>
    </>
  );
};

export default IntroTitle;
