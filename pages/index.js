import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.center}>
      <div className={styles.sa}>
        <div>
          <p className={styles.htext}>
            TestCase <span className={styles.hbold}>APP</span>
          </p>
          <p className={styles.pixelperfect}>“Pixel Perfect”</p>
        </div>
        <div className={styles.photo}></div>
        <div className={styles.box}>
          <p className={styles.textsand700}>Welcome to the TestCase APP!</p>
          <p className={styles.textsand500}>
            We created this exercise to gain insights about your development
            skills.
          </p>

          <Link href="/home">
            <button className={styles.button}>Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
