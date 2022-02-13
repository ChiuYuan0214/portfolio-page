import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom";

import BackDrop from "../UI/BackDrop/BackDrop";

import styles from "./ProjectModal.module.css";

const Project1Movie = React.lazy(() => import('./ProjectMovie/Project1Movie'));
const Project2Movie = React.lazy(() => import("./ProjectMovie/Project2Movie"));

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

  const tagList = tags.map((tag) => <p key={tag}>{tag}</p>);

  const Modal = () => {
    return (
      <Suspense fallback="block">
        {!closed && (
          <section
            className={`${!closed && styles.modal} ${
              isClosing ? styles.modalClosing : ""
            }`}
          >
            {title === "E-COMMERCE WEBSITE" && <Project1Movie />}
            {title === "CALENDER AND EXPENSES" && <Project2Movie />}
            {title === "PORTFOLIO WEB PAGE" && (
              <img src={imageSrc} alt={title} />
            )}
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
      </Suspense>
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
