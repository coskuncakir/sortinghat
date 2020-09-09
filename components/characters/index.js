import useSWR from "swr";
import fetcher from "../../lib/fetcher";

function Characters() {
  const { data, error } = useSWR(
    `${process.env.BACKEND_API}/characters?key=${process.env.AUTH_KEY}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      {data.map((character) => (
        <div>{character.name}</div>
      ))}
    </div>
  );
}

export default Characters;
