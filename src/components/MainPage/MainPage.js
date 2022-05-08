import React, { useContext, useRef, useEffect, useState } from "react";

import PositionContext from "../../store/position-context";
import Wrapper from "../Wrapper/Wrapper";
import StringTwinkle from "../UI/StringTwinkle/StringTwinkle";
import AboutBlock from "./AboutBlock/AboutBlock";
import ContactBlock from "./ContactBlock/ContactBlock";

import {
  INTRO1,
  INTRO2,
  BIO_1,
  BIO_2,
  BIO_JAP_1,
  BIO_JAP_2,
} from "../../data/copy";

import styles from "./MainPage.module.css";

// set the content height when first time loading.
let contentHeight = window.innerWidth * 2 + 5000;
contentHeight += window.innerWidth > 500 ? 2000 : 0;

const MainPage = () => {
  const { height } = useContext(PositionContext);
  const [block1IsShow, setBlock1IsShow] = useState(false);
  const [block2IsShow, setBlock2IsShow] = useState(false);
  const block1Ref = useRef();
  const block2Ref = useRef();

  useEffect(() => {
    // get the current position data of block1 and block2.
    const block1RectY = block1Ref.current.getBoundingClientRect().y;
    const block2RectY = block2Ref.current.getBoundingClientRect().y;
    const block1OffsetHeight = block1Ref.current.offsetHeight;
    const block2OffsetHeight = block2Ref.current.offsetHeight;

    // determine if block1 should mount based on current height.
    if (
      !block1IsShow &&
      window.innerHeight > block1RectY &&
      0 <= block1RectY + block1OffsetHeight
    ) {
      setBlock1IsShow(true);
    } else if (
      block1IsShow &&
      (window.innerHeight < block1RectY || block1RectY + block1OffsetHeight < 0)
    ) {
      setBlock1IsShow(false);
    }

    // determine if block2 should mount based on current height.
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
      <div id="home"></div>
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
      <div
        ref={block2Ref}
        style={{ height: contentHeight }}
        className={styles.textBlock2}
      >
        {block2IsShow && (
          <>
            <p className={styles.fadeIn}>{BIO_JAP_1}</p>
            <p className={styles.fadeIn}>{BIO_JAP_2}</p>
            <p className={styles.fadeIn}>{BIO_1}</p>
            <p className={styles.fadeIn}>{BIO_2}</p>
          </>
        )}
      </div>
      <AboutBlock />
      <ContactBlock />
    </Wrapper>
  );
};

export default MainPage;
