import React from "react";
import styles from "./sorting-hat.module.scss";
import useSound from "use-sound";
import * as sound from "../../public/sounds";
import fetcher from "../../utils/fetcher";
import { useRouter } from "next/router";
import delay from "../../utils/delay";
import Input from "../input";
import Button from "../button";

export default function SortingHat() {
  const router = useRouter();

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
    const response = await fetcher(`${process.env.BACKEND_API}/sortingHat`);
    setLoading(false);
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

  const handleReset = () => {
    setHouse("");
    setName("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.sortingHat}>
        <svg viewBox="0 0 60 60" fill="currentColor">
          <g data-name="Layer 1" id="Layer_1">
            <path d="M16.49988,51H43.50012l1.5,2H14.99988Zm25.685-16.65845L40.127,35.71338,38.5694,34.15552,41.406,32.26447ZM30.59961,33.2002l-3.78613-2.83984-1.90991-4.45679,4.52515,1.9397,5.80847,5.808-5.95593,2.48151L30.707,34.707a1.00008,1.00008,0,0,0-.10742-1.50684ZM26.8614,18H29a.99951.99951,0,0,0,.90993-.58593l4.72934-10.405a.5.5,0,0,1,.29709-.26745L38.3419,5.60655A.5.5,0,0,1,39,6.08089V7a1,1,0,0,0,.44528.832l3,2a1.00011,1.00011,0,0,0,.55476.168h5.16814a.5.5,0,0,1,.424.235l3.13828,5.0204L41.29395,12.04443a.99976.99976,0,1,0-.58789,1.91113L42,14.3537v2.02814l-3.44727,1.72363a1.00072,1.00072,0,0,0-.334,1.519l3.54395,4.4292L40.168,26.44531a.99984.99984,0,0,0-.00005,1.1093l1.44536,2.168-4.486,2.9906L30.708,26.294l-.31447-.21291-6.82666-2.92572,2.86262-4.90727A.5.5,0,0,1,26.8614,18ZM19.625,42.78076a.99971.99971,0,0,0,.26967-1.22774l-1.64121-3.28243a.5.5,0,0,1,.01309-.47168l3.6016-6.3028A.99991.99991,0,0,0,21.707,30.293l-1.18252-1.18252a.5.5,0,0,1-.07833-.60549l1.95812-3.3567,2.67617,6.24441a1.00283,1.00283,0,0,0,.31993.40714l3.07715,2.30859L24.293,38.293a.99979.99979,0,0,0,1.0918,1.62988l11.38165-4.74237L39.293,37.707a.99973.99973,0,0,0,1.26172.125l2.35126-1.5675.869,2.31742a.5.5,0,0,1-.06815.47554l-2.267,3.0229L37.59961,39.2002A1.001,1.001,0,0,0,36.999,39H34a.998.998,0,0,0-.38386.07677l-12.0009,5.00038a.99989.99989,0,0,0,.46191,1.91992l12.8623-.98926,8.32182,1.66427a.5.5,0,0,1,.387.61148L43.21948,49H16.6181l-1.18144-2.36257a.5.5,0,0,1,.13486-.61407Zm21.248,1.374-5.67676-1.13525A.98392.98392,0,0,0,35,43c-.02539,0-.05078.001-.07715.00293l-6.78223.522L34.2002,41H36.667ZM8.30757,57.03846,13.19965,55H46.80035l4.89208,2.03846A.5.5,0,0,1,51.50011,58H8.49989A.5.5,0,0,1,8.30757,57.03846Z" />
          </g>
        </svg>
      </div>
      {!house && (
        <div className={styles.textField}>
          <Input
            type="text"
            placeholder="Can i have your name please?"
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
          />
        </div>
      )}
      {house && name && (
        <h1 className={styles.welcome}>
          Welcome {name},<br />
          better be <span className={styles.house}>
            {house.toUpperCase()}!
          </span>{" "}
        </h1>
      )}
      {!house && (
        <Button onClick={handleSort} disabled={!name || loading}>
          {loading ? "Loading" : "Sort Me!"}
        </Button>
      )}

      {house && (
        <div>
          <Button onClick={handleReset}>Nooo Sort me again!</Button>
          <Button
            style={{ marginLeft: "16px" }}
            onClick={() => router.push("/characters")}
          >
            Make Magic
          </Button>
        </div>
      )}
    </div>
  );
}
