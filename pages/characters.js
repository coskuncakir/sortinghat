import styles from "../styles/Characters.module.scss";
import Head from "next/head";
import Layout from "../components/layout";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Character from "../components/character";

export default function CharactersPage() {
  const { data, error } = useSWR(
    `${process.env.BACKEND_API}/characters?key=${process.env.AUTH_KEY}`,
    fetcher
  );

  if (error) return <Layout>failed to load</Layout>;
  if (!data) return <Layout>loading...</Layout>;

  return (
    <>
      <Head>
        <title>Characters</title>
      </Head>
      <Layout>
        <div className={styles.characters}>
          {data.map((character) => (
            <Character key={character._id} character={character} />
          ))}
        </div>
      </Layout>
    </>
  );
}
