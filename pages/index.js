import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import SortingHat from "../components/sorting-hat";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sorting Hat</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>
      <Layout>
        <SortingHat />
      </Layout>
    </>
  );
}
