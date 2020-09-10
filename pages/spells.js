import Head from "next/head";
import Layout from "../components/layout";
import useSWR from "swr";
import fetcher from "../lib/fetcher";

export default function SpellsPage() {
  const { data, error } = useSWR(
    `${process.env.BACKEND_API}/spells?key=${process.env.AUTH_KEY}`,
    fetcher
  );

  if (error) return <Layout>failed to load</Layout>;
  if (!data) return <Layout>loading...</Layout>;

  return (
    <>
      <Head>
        <title>Spells</title>
      </Head>
      <Layout>
        {data.map((spell) => (
          <div key={spell._id}>{spell.spell}</div>
        ))}
      </Layout>
    </>
  );
}
