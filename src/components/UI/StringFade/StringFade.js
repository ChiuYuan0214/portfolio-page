import React from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./StringFade.module.css";

const StringFade = ({ isOn, string, duration, delay, className }) => {
  const animationTiming = {
    enter: duration + delay,
    exit: duration + delay,
  };

  const classes = {
    enter: styles.fadeStart,
    enterActive: styles.fadeIn,
    enterDone: styles.static,
    exitActive: styles.fadeOut,
    exitDone: styles.fadeEnd
  };

  return (
    <CSSTransition
      in={isOn}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      classNames={classes}
    >
      <p
        className={className}
        style={{
          animationDuration: `${duration}ms`,
          animationDelay: `${delay}ms`,
        }}
      >
        {string}
      </p>
    </CSSTransition>
  );
};

export default StringFade;
