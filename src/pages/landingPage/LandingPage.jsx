import React from "react";
import { Infographic, Navbar } from "../../components/index";
import {
  ChooseYourPlan,
  Features,
  Footer,
  Header,
  Network,
} from "../../containers/index";

import styles from "./landingpage.module.css";

const LandingPage = () => {
  return (
    <div>
      <div className={styles.top}>
        <Navbar />
        <Header />
      </div>
      <Infographic />
      <Features />
      <ChooseYourPlan />
      <Network />
      <Footer />
    </div>
  );
};

export default LandingPage;
