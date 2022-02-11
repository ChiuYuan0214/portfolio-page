import React, { useContext, useRef, useState, useEffect } from "react";

import PositionContext from "../../store/position-context";
import SlideShow from "../SlideShow/SlideShow";
import IntroTitle from "../IntroTitle/IntroTitle";

import styles from "./Wrapper.module.css";

const startSlidePoint = 1800; // for container
const slideStartLeft = 2500; // for slideshow (left)
const rate = 1.5;
const isSlideOut = true;

let slideScrollLength = isSlideOut ? slideStartLeft * 2 : slideStartLeft;
slideScrollLength += 100;

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
    console.dir(event);
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
      console.log("height in wrapper:", height);
      setSlidePos(slideStartLeft - (height - startSlidePoint) / rate);
      toggleSlideChange();
    }
  }, [height, slideChange, toggleSlideChange]);

  useEffect(() => {
    if (targetOn) {
      console.log("wrapper scrolled!");
      wrapperRef.current.scrollTo({ top: targetHeight, behavior: "smooth" });
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
      <IntroTitle slideChange={slideChange} height={height} rate={1} />
      <SlideShow slidePos={slidePos} clientX={clientX} clientY={clientY} />
    </section>
  );
};

export default Wrapper;
