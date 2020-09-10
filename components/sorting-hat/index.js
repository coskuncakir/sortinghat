import styles from "./styles.module.css";
import useSound from "use-sound";
import * as sound from "../../public/sounds";
import fetcher from "../../lib/fetcher";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export default function SortingHat() {
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [house, setHouse] = React.useState("");

  const [gryffindor] = useSound(sound.gryffindor);
  const [hufflepuff] = useSound(sound.hufflepuff);
  const [ravenclaw] = useSound(sound.ravenclaw);
  const [slytherin] = useSound(sound.slytherin);

  const handleSort = async () => {
    const response = await fetcher(`${process.env.BACKEND_API}/sortingHat`);
    setHouse(response);

    if (response === "Gryffindor") {
      gryffindor();
    } else if (response === "Hufflepuff") {
      hufflepuff();
    } else if (response === "Ravenclaw") {
      ravenclaw();
    } else {
      slytherin();
    }

    const user = {
      name,
      house: response,
    };
    localStorage.setItem("user", JSON.stringify(user));
  };

  const handleReset = () => {
    setHouse("");
    setName("");
  };

  return (
    <Container maxWidth="xs" className={styles.container}>
      <img
        className={styles.sortingHat}
        src="images/sorting-hat.png"
        alt="Sorting Hat"
      />
      {!house && (
        <div className={styles.textField}>
          <TextField
            fullWidth
            label="Can i have your name please?"
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
          />
        </div>
      )}
      {house && name && (
        <h1 className={styles.welcome}>
          Welcome {name},<br />
          better be {house.toUpperCase()}!{" "}
        </h1>
      )}
      {!house && (
        <Button
          variant="outlined"
          size="large"
          onClick={handleSort}
          color="secondary"
          disabled={!name}
        >
          Sort Me!
        </Button>
      )}

      {house && (
        <div>
          <Button color="primary" size="small" onClick={handleReset}>
            Nooo Sort me again!
          </Button>
          <Button
            style={{ marginLeft: "16px" }}
            onClick={() => router.push("/characters")}
            variant="contained"
            color="primary"
          >
            Continue
          </Button>
        </div>
      )}
    </Container>
  );
}
