import React from "react";
import styles from "./header.module.css";

import IllustrationWithLamp from "../../assets/Illustration 1.svg";
import { ButtonRect } from "../../components";

const Header = () => {
  return (
    <header className={styles.content}>
      <div className={styles.briefing}>
        <h1 className={styles.heading1}>
          Want anything to be easy with <strong>LaslesVPN.</strong>
        </h1>
        <p className={styles.paragraph}>
          Provide a network for all your needs with ease and fun using LaslesVPN
          discover interesting features from us.
        </p>
        <ButtonRect className={styles.btn}>Get Started</ButtonRect>
      </div>
      <img
        className={styles.illustrationWithLamp}
        src={IllustrationWithLamp}
        alt="guy surfing web"
      />
    </header>
  );
};

export default Header;
