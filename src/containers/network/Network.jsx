import React from "react";
import styles from "./network.module.css";

import Map from "../../assets/Huge Global.svg";
import Netflix from "../../assets/Mask Group.svg";
import Reddit from "../../assets/Mask Group (1).svg";
import Amazon from "../../assets/Mask Group (2).svg";
import Discord from "../../assets/Mask Group (3).svg";
import Spotify from "../../assets/Mask Group (4).svg";

const Network = () => {
  return (
    <div>
      <h2 className={styles.heading2}>Huge Global Network of Fast VPN</h2>
      <p className={styles.parahgraph}>
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </p>
      <img className={styles.map} src={Map} />
      <div className={styles.sponsors}>
        <img className={styles.sponsorLogo1} src={Netflix} alt="Netflix" />
        <img className={styles.sponsorLogo2} src={Reddit} alt="Reddit" />
        <img className={styles.sponsorLogo3} src={Amazon} alt="Amazonx" />
        <img className={styles.sponsorLogo4} src={Discord} alt="Discordx" />
        <img className={styles.sponsorLogo5} src={Spotify} alt="Spotify" />
      </div>
    </div>
  );
};

export default Network;
