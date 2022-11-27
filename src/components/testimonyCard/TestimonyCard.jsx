import React from "react";
import styles from "./testimonyCard.module.css";

const TestimonyCard = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <img className={styles.image} src={props.image} />
        <div className={styles.about}>
          <h4 className={styles.heading4}>{props.name}</h4>
          <span className={styles.location}>{props.location}</span>
        </div>
        <span>{props.rating}⭐</span>
      </div>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

export default TestimonyCard;
