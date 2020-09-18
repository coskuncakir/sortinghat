import styles from "./styles.module.css";

function Character({ character }) {
  return (
    <div className={styles.character}>
      <strong className={styles.name}>{character.name}</strong>
      <div>{character.species}</div>
    </div>
  );
}

export default Character;
