import styles from "../styles/Home.module.scss";
import { MainContext, useContext } from "../context";
import { useRouter } from "next/router";
import Link from "next/link";

// import data from "../data.json";

const Card = () => {
  const { action, setAction } = useContext(MainContext);
  const router = useRouter();

  return (
    <div className={styles.mapflex}>
      {action?.map((item) => (
        <>
          <Link
            style={{ textDecoration: "none" }}
            href={{
              pathname: `missions/${item.id}`,
              query: {
                green: item.point,
                title: item.title,
                description: item.description,
                image: item.image,
              }, // the data
            }}
          >
            <div
              className={styles.card}
              key={item.id}

              // onClick={() => router.push(`missions/${item.id}`)}
            >
              <img src={item.image} width="36px" alt="img" />

              <div>
                <p className={styles.mission}>{item.title}</p>
                <p className={styles.mission2}>{item.description}</p>
              </div>
              <div>
                <p className={styles.pointgreen}>+{item.point}</p>
              </div>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Card;

// href={{
//   pathname: `missions/${item.id}`,
//   query: {
//     green: item.point,
//     title: item.title,
//     description: item.description,
//   }, // the data
// }}
