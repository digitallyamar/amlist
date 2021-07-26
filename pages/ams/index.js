import Link from "next/link";
import styles from "../../styles/Am.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      ams: data,
    },
  };
};

const Ams = ({ ams }) => {
  return (
    <div>
      <h2>All Ams</h2>
      {ams.map((am) => (
        <Link href={"/ams/" + am.id} key={am.id}>
          <a className={styles.single}>
            <h3>{am.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Ams;
