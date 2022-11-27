import React from "react";
import styles from "./buttonOval.module.css";

const ButtonOval = (props) => {
  return <button className={styles.rounded}>{props.children}</button>;
};

export default ButtonOval;
