import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Am List | Home</title>
        <meta name="keywords" content="Ams" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>;
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className={styles.text}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </p>
        <Link href="/ams">
          <a className={styles.btn}>See Am Listing</a>
        </Link>
      </div>
    </>
  );
}
