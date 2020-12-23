import React from "react";
import "../styles/globals.scss";
import Head from "next/head";
import StoreContext from "../store";

function MyApp({ Component, pageProps }) {
  const [house, setHouse] = React.useState(null);

  React.useEffect(() => {
    const house = localStorage.getItem("house") || "default";
    setHouse(house);
  }, []);

  const onHouseChange = (house) => {
    setHouse(house);
    localStorage.setItem("house", house);
  };

  React.useEffect(() => {
    const $html = document.querySelector("html");
    $html.classList.remove(...$html.classList);
    house && $html.classList.add(house);
  }, [house]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Sorting Hat</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <StoreContext.Provider value={{ house, onHouseChange }}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </>
  );
}

export default MyApp;
