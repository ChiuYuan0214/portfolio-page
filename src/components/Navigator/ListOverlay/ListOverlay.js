import React, { useState, useEffect, useContext } from "react";

import PositionContext from "../../../store/position-context";
import StringFade from "../../UI/StringFade/StringFade";

import styles from "./ListOverlay.module.css";

const ListOverlay = ({ toggleNav, isNav }) => {
  const [modal, setModal] = useState(false);
  const {setTargetHeight, toggleTargetOn} = useContext(PositionContext);

  const scrollPageHandler = (id) => {
    const targetElement = document.getElementById(id);
    const targetHeight = targetElement.offsetTop - 50;
    setTargetHeight(targetHeight);
    toggleTargetOn();
    toggleNav();
  };

  useEffect(() => {
    let timer;
    if (isNav) {
      setModal(true);
    } else {
      timer = setTimeout(() => {
        setModal(false);
      }, 700);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isNav]);

  const linkList = ["HOME", "ABOUT", "PROJECT", "CONTACT"];
  const links = linkList.map((str, idx) => {
    const id = str.toLowerCase();
    return (
    <li onClick={scrollPageHandler.bind(null, id)}>
      <StringFade
        isOn={isNav}
        string={str}
        duration={300}
        delay={idx * 100}
        className={styles.link}
      />
    </li>
  )});
  
  return (
    <section className={`${styles.listModal} ${modal ? styles.onNav : ""}`}>
      {links}
      <span>
        <StringFade
          isOn={isNav}
          string="FACEBOOK"
          duration={300}
          delay={300}
          className={styles.contact}
        />
      </span>
      <span>
        <StringFade
          isOn={isNav}
          string="INSTAGRAM"
          duration={300}
          delay={400}
          className={styles.contact}
        />
      </span>
      <span>
        <StringFade
          isOn={isNav}
          string="0902-350-579"
          duration={300}
          delay={500}
          className={styles.contact}
        />
      </span>
    </section>
  );
};

export default ListOverlay;
