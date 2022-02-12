import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import BackDrop from "../UI/BackDrop/BackDrop";

import styles from "./ProjectModal.module.css";

const SlideCard = ({ onModal, imageSrc, title, desc, demoUrl, githubUrl, tags, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        setIsClosing(false);
        setClosed(true);
      }, 500);
    }
  }, [isClosing]);

  useEffect(() => {
    if (onModal) {
      setIsClosing(false);
      setClosed(false);
    } else {
      setIsClosing(true);
    }
  }, [onModal]);

  const tagList = tags.map((tag) => <p>{tag}</p>);

  const Modal = () => {
    return (
      <>
        {!closed && (
          <section
            className={`${!closed && styles.modal} ${
              isClosing ? styles.modalClosing : ""
            }`}
          >
            <img src={imageSrc} alt={title} />
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className={styles.control}>
              <div onClick={onClose} className={styles.btn}>
                Close
              </div>
              <div className={styles.link}>
                <a rel="noreferrer" target="_blank" href={demoUrl}>
                  Demo site
                </a>
                <a rel="noreferrer" target="_blank" href={githubUrl}>
                  Github
                </a>
                <div className={styles.tags}>{tagList}</div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  };
  const portal = document.getElementById("modal-root");

  return (
    <>
      {ReactDOM.createPortal(
        !closed && <BackDrop isClosing={isClosing} onClick={onClose} />,
        portal
      )}
      {ReactDOM.createPortal(<Modal />, portal)}
    </>
  );
};

export default SlideCard;
