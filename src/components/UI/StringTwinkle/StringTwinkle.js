import React from "react";

import styles from "./StringTwinkle.module.css";

const StringTwinkle = React.memo(({ string, isShort }) => {
  const strArr = string.split("");
  const length = strArr.length;
  const rate = isShort ? 2 : 3;

  const indexList = [];

  while (indexList.length < length / rate) {
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
      if (indexList.findIndex((num) => num === index) % rate === 0) {
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
