import React from "react";
import { Navbar } from "../../components/index";
import { Features, Footer, GetStarted, Header } from "../../containers/index";

import styles from "./landingpage.module.css";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.topBar}>
        <Navbar />
        <Header />
      </div>
      <GetStarted />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
