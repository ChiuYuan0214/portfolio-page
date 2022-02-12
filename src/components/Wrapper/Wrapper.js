import React, { useContext, useRef, useState, useEffect } from "react";

import PositionContext from "../../store/position-context";
import SlideShow from "../SlideShow/SlideShow";
import IntroTitle from "../IntroTitle/IntroTitle";

import styles from "./Wrapper.module.css";

const viewWidth = window.innerWidth;
const slideShowWidth = 2500;
const startSlidePoint = viewWidth > 500 ? 1800 : 0; // for container
const slideStartLeft = viewWidth + 1200; // for slideshow (left)
const rate = 1.5;
const isSlideOut = true;

let slideScrollLength = isSlideOut ? slideStartLeft + slideShowWidth : slideStartLeft;

const projectContentHeight = viewWidth <= 500 ? slideScrollLength - 1000 : slideScrollLength;

const Wrapper = ({ children }) => {
  const ctx = useContext(PositionContext);
  const {
    height,
    clientX,
    clientY,
    targetHeight,
    targetOn,
    slideChange,
    setHeight,
    setClientY,
    setClientX,
    toggleTargetOn,
    toggleSlideChange,
  } = ctx;
  const [slidePos, setSlidePos] = useState(slideStartLeft);

  const wrapperRef = useRef();
  const viewHeight = window.innerHeight;

  const clickHandler = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  const scrollHandler = () => {
    const scrollTop = wrapperRef.current.scrollTop;
    const newHeight = scrollTop + viewHeight;
    setHeight(newHeight);
  };

  useEffect(() => {
    if (
      height >= startSlidePoint &&
      height <= startSlidePoint + slideScrollLength * rate
    ) {
      setSlidePos(slideStartLeft - (height - startSlidePoint) / rate);
    } else if (slideChange) {
      setSlidePos(slideStartLeft - (height - startSlidePoint) / rate);
      toggleSlideChange();
    }
  }, [height, slideChange, toggleSlideChange]);

  useEffect(() => {
    if (targetOn) {
      wrapperRef.current.scrollTo({ top: targetHeight });
      setHeight(targetHeight + viewHeight);
      toggleTargetOn();
      toggleSlideChange();
    }
  }, [
    targetOn,
    setHeight,
    targetHeight,
    toggleTargetOn,
    toggleSlideChange,
    viewHeight,
  ]);

  return (
    <section>
      <div
        ref={wrapperRef}
        onScrollCapture={scrollHandler}
        className={styles.wrapper}
      >
        <div className={styles.inner} onClick={clickHandler}>
          {children}
        </div>
      </div>
      <IntroTitle
        contentHeight={projectContentHeight}
        slideChange={slideChange}
        height={height}
        rate={1}
      />
      <SlideShow
        slidePos={slidePos}
        clientX={clientX}
        clientY={clientY}
      />
    </section>
  );
};

export default Wrapper;
