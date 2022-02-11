import React from "react";

import styles from "./StringTwinkle.module.css";

const StringTwinkle = React.memo(({ string }) => {
  const strArr = string.split("");
  const length = strArr.length;

  const indexList = [];

  while (indexList.length < length / 3) {
    const randomIndex = Math.floor(Math.random() * (length + 1));
    if (!indexList.includes(randomIndex)) {
      indexList.push(randomIndex);
    }
  }

  const contents = strArr.map((char, index) => {
    let classes = styles.fadeIn;
    let style = {};
    if (indexList.includes(index)) {
      classes = styles.twinkle;
      if (indexList.findIndex((num) => num === index) % 3 === 0) {
        style = { animationDelay: "0.5s" };
      }
    }

    return (
      <span key={index} style={style} className={classes}>
        {char}
      </span>
    );
  });
  return <>{contents}</>;
});

export default StringTwinkle;
