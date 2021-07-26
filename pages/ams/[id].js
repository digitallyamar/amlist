export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((am) => {
    return {
      params: {
        id: am.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { am: data },
  };
};

const Details = ({ am }) => {
  return (
    <div>
      <h1>{am.name}</h1>
      <p>{am.email}</p>
      <p>{am.website}</p>
      <p>{am.address.city}</p>
    </div>
  );
};

export default Details;
