import React from "react";

import styles from "./StringTwinkle.module.css";

// using React.memo to prevent re-render on every scroll event.
const StringTwinkle = React.memo(({ string, isShort }) => {
  const strArr = string.split("");
  const length = strArr.length;

  // if the length of string is short, set the amount of twinkle char to half
  const rate = isShort ? 2 : 3;

  const indexList = [];

  // collect twinkle char index until matched the amount
  while (indexList.length < length / rate) {
    const randomIndex = Math.floor(Math.random() * (length + 1));
    // push the index if not existing in current array yet
    if (!indexList.includes(randomIndex)) {
      indexList.push(randomIndex);
    }
  }

  const contents = strArr.map((char, index) => {
    let classes = styles.fadeIn;
    let style = {};

    // check if the index of this char was specified in indexList
    if (indexList.includes(index)) {
      classes = styles.twinkle;
      // set animation-delay if this index also match the rate
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
