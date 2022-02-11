import styles from "./BackDrop.module.css";

const BackDrop = ({ isClosing, onClick }) => {
  return (
    <>
      <div
        className={`${styles.backdrop} ${isClosing ? styles.close : ""}`}
        onClick={onClick}
      ></div>
      <div
        className={`${styles.lineX} ${isClosing ? styles.lineXOut : ""}`}
      ></div>
      <div className={`${styles.lineY} ${isClosing ? styles.lineYOut : ""}`}></div>
    </>
  );
};

export default BackDrop;
