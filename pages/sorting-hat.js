import Head from "next/head";
import SortingHat from "../components/sorting-hat";
import Layout from "../components/layout";

export default function SortingHatPage() {
  return (
    <>
      <Head>
        <title>Sorting Hat</title>
      </Head>
      <Layout>
        <SortingHat />
      </Layout>
    </>
  );
}
