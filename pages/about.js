import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Am List | About</title>
        <meta name="keywords" content="Ams" />
      </Head>
      <div>
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.{" "}
        </p>
      </div>
    </>
  );
};

export default About;
