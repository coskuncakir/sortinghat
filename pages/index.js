import Head from "next/head";
import Layout from "../components/layout";
import SortingHat from "../components/sorting-hat";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harry Potter</title>
      </Head>
      <Layout>
        <SortingHat />
      </Layout>
    </>
  );
}
