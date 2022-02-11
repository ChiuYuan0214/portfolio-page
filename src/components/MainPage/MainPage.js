import React from 'react';

import Wrapper from '../Wrapper/Wrapper';

import { INTRO1, INTRO2, SELF_INTRODUCTION } from '../../data/copy';

import styles from './MainPage.module.css';

const MainPage = () => {
    return (
      <Wrapper>
        <h1 className={styles.headline}>WELCOME TO MY PAGE</h1>
        <div className={styles.textBlock1}>
          <p className={styles.intro}>{INTRO1}</p>
          <p>{INTRO2}</p>
        </div>
        <div className={styles.textBlock2}>
          <p>{SELF_INTRODUCTION}</p>
        </div>
        <div className={styles.textBlock3}></div>
      </Wrapper>
    );
};

export default MainPage;