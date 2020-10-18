import Head from "next/head";
import Layout from "../components/layout";
import useSWR from "swr";
import fetcher from "../utils/fetcher";

export default function HousesPage() {
  const { data, error } = useSWR(
    `${process.env.BACKEND_API}/houses?key=${process.env.AUTH_KEY}`,
    fetcher
  );

  if (error) return <Layout>failed to load</Layout>;
  if (!data) return <Layout>loading...</Layout>;

  return (
    <>
      <Head>
        <title>Houses</title>
      </Head>
      <Layout>
        {data.map((house) => (
          <div key={house._id}>{house.name}</div>
        ))}
      </Layout>
    </>
  );
}
