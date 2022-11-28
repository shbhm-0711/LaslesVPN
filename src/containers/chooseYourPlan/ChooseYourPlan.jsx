import React from "react";
import styles from "./chooseYourPlan.module.css";

import { Plan } from "../../components/index";

const ChooseYourPlan = () => {
  return (
    <div className={styles.plans}>
      <Plan type="free" price="Free"></Plan>
      <Plan type="standard" price="$9"></Plan>
      <Plan type="premium" price="$12"></Plan>
    </div>
  );
};

export default ChooseYourPlan;
