import React from "react";
import { Infographic, Navbar, Subscribe } from "../../components/index";
import {
  ChooseYourPlan,
  Features,
  Footer,
  Header,
  Network,
} from "../../containers/index";
import Testimonial from "../../containers/testimonial/Testimonial";

import styles from "./landingpage.module.css";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Infographic />
      <Features />
      <ChooseYourPlan />
      <Network />
      <Testimonial />
      <Subscribe />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
