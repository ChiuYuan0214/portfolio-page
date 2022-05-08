import React, { useState, useEffect, useContext } from "react";

import PositionContext from "../../../store/position-context";
import StringFade from "../../UI/StringFade/StringFade";

import styles from "./ListOverlay.module.css";

// detect the viewport width only the first time.
const viewWidth = window.innerWidth;

const ListOverlay = ({ toggleNav, isNav }) => {
  const [modal, setModal] = useState(false);
  const {setTargetHeight, toggleTargetOn} = useContext(PositionContext);

  const scrollPageHandler = (id) => {
    // can't set the anchor for project block, so specify the height instead.
    if (id === 'project') {
      setTargetHeight(viewWidth <= 500 ? 2070 : 4092);
    } else {
      // get the offsetTop of element for other block.
      const targetElement = document.getElementById(id);
      const targetHeight = targetElement.offsetTop;
      setTargetHeight(id === "home" ? targetHeight : targetHeight - 50);
    }
    // reset the toggle target state to false after scrolling.
    toggleTargetOn();
    // close the navbar modal.
    toggleNav();
  };

  // close the modal 700ms later after close button was clicked.
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
    <li onClick={scrollPageHandler.bind(null, id)} key={idx}>
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
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.facebook.com/adam.chiu.73/"
      >
        <StringFade
          isOn={isNav}
          string="FACEBOOK"
          duration={300}
          delay={300}
          className={styles.contact}
        />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/chiuyuan0214/"
      >
        <StringFade
          isOn={isNav}
          string="INSTAGRAM"
          duration={300}
          delay={400}
          className={styles.contact}
        />
      </a>
      <a href="tel:0902-350-579">
        <StringFade
          isOn={isNav}
          string="0902-350-579"
          duration={300}
          delay={500}
          className={styles.contact}
        />
      </a>
    </section>
  );
};

export default ListOverlay;
