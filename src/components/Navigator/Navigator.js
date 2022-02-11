import React from 'react';

import ListOverlay from './ListOverlay/ListOverlay';

import styles from './Navigator.module.css';


const Navigator = ({toggleNav, isNav}) => {
    return (
      <header>
        <div className={styles.nav} onClick={toggleNav}>
          <div className={`${styles.upline} ${isNav ? styles.upOn : ""}`}></div>
          <div
            className={`${styles.downline} ${isNav ? styles.downOn : ""}`}
          ></div>
        </div>
        <ListOverlay toggleNav={toggleNav} isNav={isNav} />
      </header>
    );
};

export default Navigator;