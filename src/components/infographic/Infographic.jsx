import React from "react";
import styles from "./infographic.module.css";

import iconUser from "../../assets/Group 1216.svg";
import iconLocation from "../../assets/Group 1215.svg";
import iconServers from "../../assets/Group 1217.svg";

const Info = (props) => {
  return (
    <div className={styles.singleInfo}>
      <img className={styles.icon} src={props.icon} />
      <div className={styles.innerFlex}>
        <div className={styles.what}>
          {props.what}
          <strong className={styles.count}>{props.count}</strong>
        </div>
      </div>
    </div>
  );
};

const Infographic = () => {
  return (
    <div className={styles.main}>
      <Info what="Users" count="90+" icon={iconUser} />
      <Info what="Locations" count="30+" icon={iconLocation} />
      <Info what="Servers" count="50+" icon={iconServers} />
    </div>
  );
};

export default Infographic;
