import Head from "next/head";
import SortingHat from "../components/sorting-hat";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harry Potter</title>
      </Head>

      <SortingHat />
    </>
  );
}
