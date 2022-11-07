import React from "react";
import Nav from "../components/Nav";

import styles from "../styles/Home.module.scss";

const dones = () => {
  return (
    <div className={styles.center}>
      <div className={styles.bgwhitecontainer}>
        <Nav />
        <p className={styles.completed}>Completed actions</p>
      </div>
    </div>
  );
};

export default dones;
