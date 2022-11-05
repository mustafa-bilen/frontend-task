import styles from "../styles/Home.module.scss";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navcol}>
        <div>
          <p className={styles.montsat700small}>
            TestCase <span className={styles.hboldsmall}>APP</span>
          </p>
        </div>
        <div>
          <button className={styles.points}>
            Points: <span className={styles.pointsbold}> 29,850</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
