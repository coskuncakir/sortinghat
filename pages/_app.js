import React from "react";
import "../styles/globals.scss";
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
    <StoreContext.Provider value={{ house, onHouseChange }}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

export default MyApp;
