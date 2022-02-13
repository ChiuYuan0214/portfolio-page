import React, { useContext, useEffect, useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import PositionContext from "../../../store/position-context";

import {
  SELF_INTRODUCTION_1,
  SELF_INTRODUCTION_2,
  SELF_INTRODUCTION_3,
} from "../../../data/copy";

import styles from "./AboutBlock.module.css";

const AboutBlock = () => {
  const [aboutIsShow, setAboutIsShow] = useState(false);
  const { height, setTargetHeight, toggleTargetOn } = useContext(PositionContext);
  const aboutRef = useRef();

  const scrollPageHandler = () => {
    const targetHeight = document.getElementById("contact").offsetTop;
    setTargetHeight(targetHeight);
    toggleTargetOn();
  };

  useEffect(() => {
    const aboutRectY = aboutRef.current.getBoundingClientRect().y;
    const aboutOffsetHeight = aboutRef.current.offsetHeight;
    const viewHeight = window.innerHeight;
    if (
      !aboutIsShow &&
      aboutRectY <= viewHeight - 200 &&
      aboutRectY + aboutOffsetHeight >= 200
    ) {
      setAboutIsShow(true);
    } else if (
      aboutIsShow &&
      (aboutRectY > viewHeight - 200 || aboutRectY + aboutOffsetHeight < 200)
    ) {
      setAboutIsShow(false);
    }
  }, [height, aboutIsShow]);

  const classes = {
    enter: "",
    enterActive: styles.aboutEnter,
    enterDone: styles.aboutStatic,
    exitActive: styles.aboutExit,
    exitDone: "",
  };

  return (
    <section id="about" ref={aboutRef} className={styles.container}>
      <CSSTransition
        in={aboutIsShow}
        timeout={{ enter: 600, exit: 600 }}
        mountOnEnter
        unmountOnExit
        classNames={classes}
      >
        <div className={styles.about}>
          <h2>ABOUT ME</h2>
          <p className={styles.slideIn}>{SELF_INTRODUCTION_1}</p>
          <p className={styles.slideIn} style={{ animationDelay: ".5s" }}>
            {SELF_INTRODUCTION_2}
          </p>
          <p className={styles.slideIn} style={{ animationDelay: ".7s" }}>
            {SELF_INTRODUCTION_3}
          </p>
          <div className={styles.contactBox}>
            <div className={styles.contact} onClick={scrollPageHandler}>
              Contact
            </div>
          </div>
        </div>
      </CSSTransition>
    </section>
  );
};

export default AboutBlock;
