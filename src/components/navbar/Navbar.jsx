import React, { useState } from "react";
import styles from "./navbar.module.css";

import Logo from "../../assets/Logo.svg";
import ButtonOval from "../buttomOval/ButtonOval";

const AnchorsMenu = () => {
  return (
    <React.Fragment>
      <a className={styles.anchor}>About</a>
      <a className={styles.anchor}>Features</a>
      <a className={styles.anchor}>Pricing</a>
      <a className={styles.anchor}>Testimonials</a>
      <a className={styles.anchor}>Help</a>
    </React.Fragment>
  );
};

const Navbar = () => {
  const [toggelMenu, setToggelMenu] = useState(false);
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={Logo} alt="Logo" />
      <div className={styles.desktopAnchors}>
        <AnchorsMenu />
      </div>

      <div className={styles.logging}>
        <button className={styles.SignInButton}>Sign In</button>
        <ButtonOval>Sign Up</ButtonOval>
      </div>
      <button
        className={styles.anchorsMenuButton}
        onClick={() => setToggelMenu((prev) => !prev)}
      >
        {toggelMenu ? "❌" : "☰"}
        {/* ❌ */}
      </button>

      {toggelMenu && (
        <div className={styles.anchorsMenu}>
          <AnchorsMenu />
          <div className={styles.loggingMobile}>
            <button className={styles.SignInButton}>Sign In</button>
            <ButtonOval>Sign Up</ButtonOval>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
