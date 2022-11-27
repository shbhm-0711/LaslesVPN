import React from "react";
import ButtonRect from "../buttonRect/ButtonRect";
import styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h2 className={styles.heading2}>
          Subscribe Now for Get Special Features!
        </h2>
        <p className={styles.paragraph}>
          Let's subscribe with us and find the fun.
        </p>
      </div>
      <ButtonRect className={styles.btn}>Subscribe Now</ButtonRect>
    </div>
  );
};

export default Subscribe;
