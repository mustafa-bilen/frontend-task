import React from "react";
import styles from "../styles/Home.module.scss";
import Nav from "../components/Nav";
import Image from "next/image";
import Tick from "../assets/Vector.png";
import Link from "next/link";

const Close = () => {
  return (
    <div className={styles.center}>
      <div className={styles.sa}>
        <Nav />
        <div className={styles.earnpointstyle}>
          <Image src={Tick} alt="me" width="72" height="50.55" />
          <p className={styles.textsand700}>Congratulations!</p>
          <p className={styles.textsand500}>
            You`ve earned points for your participation! Keep Up the great work!
          </p>
          <Link href="/dones">
            <button className={styles.button}>Close</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Close;
