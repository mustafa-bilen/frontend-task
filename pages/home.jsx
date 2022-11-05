import Card from "../components/Card";
import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";
import axios from "axios";

import { useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.center}>
      <div className={styles.bgwhitecontainer}>
        <Nav />
        <p className={styles.completed}>Actions to be completed</p>
        <Card />
      </div>
    </div>
  );
}
