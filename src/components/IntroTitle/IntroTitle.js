import React, { useState, useEffect } from "react";

import styles from "./IntroTitle.module.css";

const startSlidePoint = 2200;

const IntroTitle = ({ height, rate }) => {
  const [title1X, setTitle1X] = useState(-500);
  const [title2X, setTitle2X] = useState(1800);
  const [title1Y, setTitle1Y] = useState(200);
  const [title2Y, setTitle2Y] = useState(280);

  useEffect(() => {
    if (height >= startSlidePoint && height <= startSlidePoint + 900 * rate) {
      setTitle1X(-500 + (height - startSlidePoint) / rate);
    }
    if (height >= startSlidePoint && height <= startSlidePoint + 1300 * rate) {
      setTitle2X(1800 - (height - startSlidePoint) / rate);
    }

    const maxDistance = startSlidePoint + 1000 * rate + 6800;

    if (height >= maxDistance && height <= maxDistance + 600) {
      setTitle1Y(200 - height + maxDistance);
      setTitle2Y(280 - height + maxDistance);
    }
  }, [height, rate]);
  
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
