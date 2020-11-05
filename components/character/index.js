import styles from "./styles.module.scss";
import Image from "next/image";
import cn from "classnames";

function Character({ character }) {
  const house = character.house ? character.house.toLowerCase() : "noHouse";
  const school =
    character.school && character.school.includes("Hogwarts")
      ? "Hogwarts"
      : character.school && character.school.includes("Durmstrang")
      ? "Durmstrang"
      : null;

  return (
    <article className={cn(styles.character, styles[house])}>
      <header className={styles.header}>
        <span className={styles.school}>{school}</span>
        <div className={styles.photo}>
          <Image
            src="/images/no-avatar.png"
            alt={character.name}
            width={80}
            height={80}
          />
        </div>
      </header>
      <div className={styles.content}>
        <strong className={styles.name}>{character.name}</strong>
        <span className={styles.house}>
          {character.house || character.role || character.species}
        </span>
      </div>
    </article>
  );
}

export default Character;
