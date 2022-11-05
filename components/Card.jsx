import styles from "../styles/Home.module.scss";

// import data from "../data.json";

export const getStaticProps = async () => {
  const res = await fetch("https://cdn.mallconomy.com/testcase/actions.json");
  const data = await res.json();

  return {
    props: { info: data },
  };
};

const Card = ({ info }) => {
  return (
    <div className={styles.mapflex}>
      {info.map((item, idx) => (
        <div className={styles.card} key={idx}>
          <div>
            <img src={item.image} width="36px" alt="img" />
          </div>
          <div>
            <p className={styles.mission}>{item.title}</p>
            <p className={styles.mission2}>{item.description}</p>
          </div>
          <div>
            <p className={styles.pointgreen}>+{item.point}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
