import React, { useRef, useState, useEffect } from "react";

import SlideShow from "../SlideShow/SlideShow";
import IntroTitle from "../IntroTitle/IntroTitle";

import styles from "./Wrapper.module.css";

const startSlidePoint = 1000; // for container
const slideStartLeft = 2500; // for slideshow (left)
const rate = 1.5;
const isSlideOut = true;
let slideScrollLength = isSlideOut ? slideStartLeft * 2 : slideStartLeft;
slideScrollLength += 100;
// container should longer than 3000 + 3000 * 3

const Wrapper = ({ children }) => {
  const [height, setHight] = useState(0);
  const [slidePos, setSlidePos] = useState(slideStartLeft);
  // const [scrollDirection, setScrollDirection] = useState();

  const wrapperRef = useRef();
  const viewHeight = window.innerHeight;

  // const autoScroll = (num) => {
  //   for (let i = 0; i < 30; i++) {
  //     setTimeout(() => {
  //       wrapperRef.current.scrollBy({
  //         top: num * 2 / (i + 1),
  //         left: 0,
  //         behavior: "smooth",
  //       });
  //     }, i > 10 ? 100 : i * 5 + 50);
  //   }
  // };

  // const scrollEffect = () => {
  //   if (scrollDirection === "DOWN") {
  //     autoScroll(60);
  //   } else {
  //     autoScroll(-60);
  //   }
  // };

  // let timer;

  // const onWheelHandler = () => {
  //   if (timer) {
  //     clearTimeout(timer);
  //   }
  //   timer = setTimeout(() => {
  //     scrollEffect();
  //   }, 150);
  // };

  useEffect(() => {
    if (
      height >= startSlidePoint && // 3000
      height <= startSlidePoint + slideScrollLength * rate // 12000
    ) {
      setSlidePos(slideStartLeft - (height - startSlidePoint) / rate);
    }
  }, [height]);

  const scrollHandler = () => {
    const scrollTop = wrapperRef.current.scrollTop;
    const newHeight = scrollTop + viewHeight;
    // if (newHeight > height) {
    //   setScrollDirection("DOWN");
    // } else {
    //   setScrollDirection("UP");
    // }
    setHight(newHeight);
  };

  return (
    <section>
      <div
        ref={wrapperRef}
        onScrollCapture={scrollHandler}
        // onWheel={onWheelHandler}
        className={styles.wrapper}
      >
        <div className={styles.inner}>{children}</div>
      </div>
      <IntroTitle height={height} rate={1} />
      <SlideShow slidePos={slidePos} />
    </section>
  );
};

export default Wrapper;
