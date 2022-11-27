import React from "react";
import styles from "./chooseYourPlan.module.css";

import { Plan } from "../../components/index";

const ChooseYourPlan = () => {
  return (
    <div className={styles.plans}>
      <Plan type="free"></Plan>
      <Plan type="standard"></Plan>
      <Plan type="premium"></Plan>
    </div>
  );
};

export default ChooseYourPlan;
