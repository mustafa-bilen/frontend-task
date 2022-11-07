import Nav from "../../components/Nav";

import styles from "../../styles/Home.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
const MissionItem = () => {
  const router = useRouter();
  const { green, title, description, image, all } = router.query;

  return (
    <div className={styles.center}>
      <div className={styles.sa}>
        <Nav />
        <div className={styles.earnpointstyle}>
          <img src={image} width="50" alt="image" />
          <p className={styles.pointgreenwtmargin}>+{green}</p>
          <p className={styles.textsand700}>{title}</p>
          <p className={styles.textsand500}>{description}</p>
          <Link href="/close">
            <button className={styles.button} onClick={() => {}}>
              Earn points
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MissionItem;
