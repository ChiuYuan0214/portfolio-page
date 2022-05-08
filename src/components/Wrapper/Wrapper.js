import React, { useContext, useRef, useState, useEffect } from "react";

import PositionContext from "../../store/position-context";
import SlideShow from "../SlideShow/SlideShow";
import IntroTitle from "../IntroTitle/IntroTitle";

import styles from "./Wrapper.module.css";

const viewWidth = window.innerWidth;
const slideShowWidth = 2500;
const startSlidePoint = viewWidth > 500 ? 1800 : 0; // for container, scrollTop + offsetHeight
const slideStartLeft = viewWidth + 1200; // for slideshow (offsetLeft)
const rate = 1.5; // container scroll length : slideshow auto-scroll length
const isSlideOut = true;

let slideScrollLength = isSlideOut ? slideStartLeft + slideShowWidth : slideStartLeft;

const projectContentHeight = viewWidth <= 500 ? slideScrollLength - 1000 : slideScrollLength;


// the wrapper for fixed position components
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

  // set click position state.
  const clickHandler = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };

  // listen to scroll event, set the current height as state.
  const scrollHandler = () => {
    const scrollTop = wrapperRef.current.scrollTop;
    const newHeight = scrollTop + viewHeight;
    setHeight(newHeight);
  };

  // set the slideshow position sync with scroll event
  useEffect(() => {
    if (
      !slideChange && height >= startSlidePoint &&
      height <= startSlidePoint + slideScrollLength * rate
    ) {
      setSlidePos(slideStartLeft - (height - startSlidePoint) / rate);
    } else if (slideChange) {
      // if the height change was triggered by anchor, toggle off slideChange afterward.
      setSlidePos(slideStartLeft - (height - startSlidePoint) / rate);
      toggleSlideChange();
    }
  }, [height, slideChange, toggleSlideChange]);

  useEffect(() => {
    if (targetOn) {
      // auto-scroll to the specified blcok wehn targetOn. ( triggered by anchor tag)
      wrapperRef.current.scrollTo({ top: targetHeight });
      setHeight(targetHeight + viewHeight);
      // toggle targetOn to false after finished changing page height.
      toggleTargetOn();
      // toggle slideChange to true.
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
