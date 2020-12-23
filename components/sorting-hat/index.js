import React from "react";
import Container from "../layout/container";
import StoreContext from "../../store";
import useSound from "use-sound";
import * as sound from "../../public/sounds";
import fetcher from "../../utils/fetcher";
import delay from "../../utils/delay";
import Input from "../input";
import Button from "../button";
import Image from "next/image";
import styles from "./sorting-hat.module.scss";

export default function SortingHat() {
  const store = React.useContext(StoreContext);

  const [name, setName] = React.useState("");
  const [house, setHouse] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [thinking] = useSound(sound.thinking);
  const [gryffindor] = useSound(sound.gryffindor);
  const [hufflepuff] = useSound(sound.hufflepuff);
  const [ravenclaw] = useSound(sound.ravenclaw);
  const [slytherin] = useSound(sound.slytherin);

  const handleSort = async () => {
    setLoading(true);
    thinking();
    await delay(8000);
    const response = await fetcher(`api/sortingHat`);

    setLoading(false);
    setHouse(response.house);

    if (response.house === "Gryffindor") {
      gryffindor();
    } else if (response.house === "Hufflepuff") {
      hufflepuff();
    } else if (response.house === "Ravenclaw") {
      ravenclaw();
    } else {
      slytherin();
    }

    store.onHouseChange(response.house.toLowerCase());
  };

  const handleReset = () => {
    setHouse("");
  };

  return (
    <Container className={styles.grid}>
      <Image
        src="/images/sorting-hat.png"
        alt="Sorting Hat"
        width={300}
        height={300}
      />
      {!house && (
        <form className={styles.grid}>
          <Input
            type="text"
            placeholder="Can i have your name please?"
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled={loading}
            autoFocus={true}
          />
          <Button
            onClick={handleSort}
            disabled={!name || loading}
            type="submit"
          >
            {loading ? "Thinking..." : "Sort Me!"}
          </Button>
        </form>
      )}

      {house && (
        <>
          <h1 className={styles.welcome}>
            Welcome {name},<br />
            better be{" "}
            <span className={styles.house}>{house.toUpperCase()}!</span>{" "}
          </h1>
          <Button onClick={handleReset}>Nooo Sort me again!</Button>
        </>
      )}
    </Container>
  );
}
