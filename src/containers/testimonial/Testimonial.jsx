import React from "react";
import styles from "./testimonial.module.css";

import person1 from "../../assets/Ellipse 175.png";
import person2 from "../../assets/Ellipse 175 (1).png";
import person3 from "../../assets/Ellipse 175 (2).png";

import { TestimonyCard } from "../../components/index";

const Testimonial = () => {
  return (
    <div>
      <h2 className={styles.heading2}>
        Trusted by Thousands of Happy Customer
      </h2>
      <p className={styles.paragraph}>
        These are the stories of our customers who have joined us with great
        pleasure when using this crazy feature.
      </p>
      <div className={styles.testimonials}>
        <TestimonyCard
          name="Viezh Robert"
          location="Warsaw, Poland"
          image={person1}
          rating="4.5"
          description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”"
        />
        <TestimonyCard
          name="Yessica Christy"
          location="Shanxi, China"
          image={person2}
          rating="4.5"
          description="“I like it because I like to travel far and still can connect with high speed.”"
        />
        <TestimonyCard
          name="Kim Young Jou"
          location="Yessica Christy"
          image={person3}
          rating="4.5"
          description="“This is very unusual for my business that currently requires a virtual private network that has high security.”"
        />
      </div>
    </div>
  );
};

export default Testimonial;
