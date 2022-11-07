import Nav from "../components/Nav";
import styles from "../styles/Home.module.scss";
import { MainContext } from "../context";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const Home = ({ data }) => {
  const [action, setAction] = useState();

  const info = {
    action,
    setAction,
  };

  useEffect(() => {
    setAction(data);
  }, []);

  return (
    <MainContext.Provider value={info}>
      <div className={styles.center}>
        <div className={styles.bgwhitecontainer}>
          <Nav />
          <p className={styles.completed}>Actions to be completed</p>
          <Card />
        </div>
      </div>
    </MainContext.Provider>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://cdn.mallconomy.com/testcase/actions.json`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
