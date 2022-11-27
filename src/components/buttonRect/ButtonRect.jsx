import React from "react";
import styles from "./buttonRect.module.css";

const ButtonRect = (props) => {
  return (
    <button className={`${styles.btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default ButtonRect;
