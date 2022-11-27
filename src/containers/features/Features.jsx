import React from "react";
import styles from "./features.module.css";

import { List } from "../../components/index";

import Illustration from "../../assets/Illustration 2.svg";
import TickMark from "../../assets/Group 1120.svg";

const featureArray = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN.",
  "No specific time limits.",
];

const Features = () => {
  return (
    <section className={styles.sectionContent}>
      <img
        className={styles.illustration}
        src={Illustration}
        alt="guy enjoying web surfing"
      />
      <div className={styles.sectionFeatures}>
        <h2 className={styles.heading2}>
          We Provide Many Features You Can Use
        </h2>
        <p className={styles.sectionParagraph}>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className={styles.featureList}>
          {featureArray.map((item, index) => (
            <List icon={TickMark} alt="Tick Mark" key={index}>
              {item}
            </List>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
