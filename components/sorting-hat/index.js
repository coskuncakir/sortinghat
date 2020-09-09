import styles from "./styles.module.css";
import useSound from "use-sound";
import * as sound from "../../public/sounds";
import fetcher from "../../lib/fetcher";

export default function SortingHat() {
  const [name, setName] = React.useState("");
  const [house, setHouse] = React.useState(null);

  const [gryffindor] = useSound(sound.gryffindor);
  const [hufflepuff] = useSound(sound.hufflepuff);
  const [ravenclaw] = useSound(sound.ravenclaw);
  const [slytherin] = useSound(sound.slytherin);

  const handleSort = async () => {
    const response = await fetcher("https://www.potterapi.com/v1/sortingHat");
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
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sorting Hat</h1>

      <div>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={handleSort}>
          Sort Me!
        </button>
      </div>
      {house && (
        <h2>
          Hoşgeldin {name}, {house}
        </h2>
      )}
    </div>
  );
}
