import React, { useState, useEffect } from "react";

import styles from "./IntroTitle.module.css";

// config values.
const viewWidth = window.innerWidth;
 const startSlidePoint = viewWidth <= 500 ? 1000 : 1500;
const initialTitle1X = -500;
const initialTitle2X = viewWidth + Math.abs(initialTitle1X);
const lineGap = viewWidth <= 500 ? 40 : 80;
const initialTitle1Y = 200;
const initialTitle2Y = initialTitle1Y + lineGap;
const moveLeftPointRate = viewWidth <= 500 ? 3.5 : 5;
const title1XMaxVal =
  Math.abs(initialTitle1X) + viewWidth / 2 - viewWidth / moveLeftPointRate;
const title2XMaxVal =
  initialTitle2X - viewWidth + viewWidth / 2 + viewWidth / moveLeftPointRate;
  

const IntroTitle = ({ slideChange, height, rate, contentHeight }) => {
  const [title1X, setTitle1X] = useState(initialTitle1X);
  const [title2X, setTitle2X] = useState(initialTitle2X);
  const [title1Y, setTitle1Y] = useState(initialTitle1Y);
  const [title2Y, setTitle2Y] = useState(initialTitle2Y);

  useEffect(() => {
    const viewHeight = window.innerHeight;

    // if (slideChange || (height >= startSlidePoint && height <= startSlidePoint + 900 * rate)) {
    //   setTitle1X(-500 + (height - startSlidePoint) / rate);
    // }
    // if (slideChange || (height >= startSlidePoint && height <= startSlidePoint + 1300 * rate)) {
    //   setTitle2X(1800 - (height - startSlidePoint) / rate);
    // }

    // move title1 when scrolling.
    if (
      height >= startSlidePoint &&
      height <= startSlidePoint + title1XMaxVal * rate
    ) {
      setTitle1X(initialTitle1X + (height - startSlidePoint) / rate);

    // move title1 to respective position when user jump through anchor tags.
    } else if (slideChange) {
      if (height < startSlidePoint) {
        setTitle1X(initialTitle1X);
      } else {
        setTitle1X(viewWidth / 2 - viewWidth / moveLeftPointRate);
      }
    }

    // move title2 when scrolling.
    if (
      height >= startSlidePoint &&
      height <= startSlidePoint - 20 + title2XMaxVal * rate
    ) {
      setTitle2X(initialTitle2X - (height - startSlidePoint) / rate);

    // move title2 to respective position when user jump through anchor tags.
    } else if (slideChange) {
      if (height < startSlidePoint) {
        setTitle2X(initialTitle2X);
      } else {
        setTitle2X(viewWidth / 2 - viewWidth / moveLeftPointRate + 20);
      }
    }

    // max vertical scroll distance for IntroTitle. (unfix if exceed)
    let maxDistance =
      startSlidePoint + title2XMaxVal * rate + contentHeight + viewWidth + 1000;
    maxDistance += viewWidth <= 500 ? 300 : 0;

    // if scroll distance already exceed max distance but still within viewport, scroll title up until it leaved the viewport.
    if (height >= maxDistance && height <= maxDistance + viewHeight) {
      setTitle1Y(initialTitle1Y - height + maxDistance);
      setTitle2Y(initialTitle2Y - height + maxDistance);

    // set the vertical position of 2 title to certain value when user jump through anchor tags.
    } else if (slideChange && height < maxDistance) {
      setTitle1Y(initialTitle1Y);
      setTitle2Y(initialTitle2Y);
    } else if (slideChange && height > maxDistance + viewHeight) {
      setTitle1Y(initialTitle1Y - viewHeight);
      setTitle2Y(initialTitle2Y - viewHeight);
    }
  }, [height, rate, slideChange, contentHeight]);

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
