import React, { useState } from "react";

import ListOverlay from "./ListOverlay/ListOverlay";

import styles from "./Navigator.module.css";

const Navigator = () => {
  const [isNav, setIsNav] = useState(false);

  const toggleIsNavHandler = () => {
    setIsNav((prev) => !prev);
  };
  return (
    <header>
      <div className={styles.nav} onClick={toggleIsNavHandler}>
        <div className={`${styles.upline} ${isNav ? styles.upOn : ""}`}></div>
        <div
          className={`${styles.downline} ${isNav ? styles.downOn : ""}`}
        ></div>
      </div>
      <ListOverlay toggleNav={toggleIsNavHandler} isNav={isNav} />
    </header>
  );
};

export default Navigator;
