import React from 'react';



import styles from './SlideCard.module.css';


const SlideCard = ({title, desc, imageSrc, className}) => {
    return (
      <div className={`${styles.card} ${className}`}>
        <img src={imageSrc} alt={title} />
        <div className={styles.info}>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
      </div>
    );
};

export default SlideCard;