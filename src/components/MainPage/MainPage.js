import React, { useContext, useRef, useEffect, useState } from "react";

import PositionContext from "../../store/position-context";
import Wrapper from "../Wrapper/Wrapper";
import StringTwinkle from "../UI/StringTwinkle/StringTwinkle";
import AboutBlock from "./AboutBlock/AboutBlock";

import {
  INTRO1,
  INTRO2,
  SELF_INTRODUCTION_1,
  SELF_INTRODUCTION_2,
  SELF_INTRODUCTION_3,
} from "../../data/copy";

import styles from "./MainPage.module.css";

const MainPage = () => {
  const { height } = useContext(PositionContext);
  const [block1IsShow, setBlock1IsShow] = useState(false);
  const [block2IsShow, setBlock2IsShow] = useState(false);
  const block1Ref = useRef();
  const block2Ref = useRef();

  useEffect(() => {
    const block1RectY = block1Ref.current.getBoundingClientRect().y;
    const block2RectY = block2Ref.current.getBoundingClientRect().y;
    const block1OffsetHeight = block1Ref.current.offsetHeight;
    const block2OffsetHeight = block2Ref.current.offsetHeight;
    if (
      !block1IsShow &&
      window.innerHeight > block1RectY &&
      0 <= block1RectY + block1OffsetHeight
    ) {
      setBlock1IsShow(true);
      console.log("block1IsShow was changed!");
    } else if (
      block1IsShow &&
      (window.innerHeight < block1RectY || block1RectY + block1OffsetHeight < 0)
    ) {
      setBlock1IsShow(false);
    }

    if (
      !block2IsShow &&
      window.innerHeight > block2RectY &&
      0 <= block2RectY + block2OffsetHeight
    ) {
      setBlock2IsShow(true);
    } else if (
      block2IsShow &&
      (window.innerHeight < block2RectY || block2RectY + block2OffsetHeight < 0)
    ) {
      setBlock2IsShow(false);
    }
  }, [block1IsShow, block2IsShow, height]);

  return (
    <Wrapper>
      <h1 className={styles.headline}>WELCOME TO MY PAGE</h1>
      <div ref={block1Ref} className={styles.textBlock1}>
        {block1IsShow && (
          <>
            <p className={styles.intro}>
              <StringTwinkle string={INTRO1} />
            </p>
            <p className={styles.fadeIn}>{INTRO2}</p>
          </>
        )}
      </div>
      <div id="project" className={styles.textBlock4}></div>
      <div ref={block2Ref} className={styles.textBlock2}>
        {block2IsShow && (
          <>
            <p className={styles.fadeIn}>{SELF_INTRODUCTION_1}</p>
            <p className={styles.fadeIn}>{SELF_INTRODUCTION_2}</p>
            <p className={styles.fadeIn}>{SELF_INTRODUCTION_3}</p>
          </>
        )}
      </div>
      <div className={styles.textBlock3}></div>
      <AboutBlock />
      <div id="contact" className={styles.contact}>Contact</div>
    </Wrapper>
  );
};

export default MainPage;
