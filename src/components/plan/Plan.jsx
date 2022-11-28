import React from "react";
import styles from "./plan.module.css";

import freePlanBox from "../../assets/Free.svg";
import standardPlanBox from "../../assets/Standard.svg";
import premiumPlanBox from "../../assets/Premium.svg";
import TickMark from "../../assets/Tick.svg";

import List from "../list/List";
import ButtonOval from "../buttomOval/ButtonOval";

const Plan = (props) => {
  let planIcon;
  let planPrice;
  let paid = false;

  const benifits = {
    free: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
    standard: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
    ],
    premium: [
      "Unlimited Bandwitch",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anyware",
      "Get New Features",
    ],
  };

  switch (props.type) {
    case "free":
      planIcon = freePlanBox;
      planPrice = "Free";
      break;
    case "standard":
      planIcon = standardPlanBox;
      planPrice = "$9";
      paid = true;
      break;
    case "premium":
      planIcon = premiumPlanBox;
      planPrice = "Free";
      paid = true;
      break;

    default:
      planIcon = null;
      break;
  }

  return (
    <div className={styles.card}>
      <img className={styles.planImgClass} src={planIcon} />
      <div className={styles.textAndButton}>
        <ul className={styles.benifitsList}>
          {benifits[props.type].map((item, index) => (
            <List
              imgClass={styles.imgClass}
              icon={TickMark}
              alt="Tick Mark"
              key={index}
            >
              {item}
            </List>
          ))}
        </ul>
        <div className={styles.price}>
          <div>
            <strong className={styles.strong}>{props.price}</strong>
            {paid && " / mo"}
          </div>
          <ButtonOval className={styles.selectPlan}>Select</ButtonOval>
        </div>
      </div>
    </div>
  );
};

export default Plan;
