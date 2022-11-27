import React from "react";
import styles from "./list.module.css";

const List = (props) => {
  return (
    <React.Fragment>
      <span className={styles.listFlex}>
        <img className={styles.icon} src={props.icon} alt={props.alt} />
        <li className={styles.listItem}>{props.children}</li>
      </span>
    </React.Fragment>
  );
};

export default List;
