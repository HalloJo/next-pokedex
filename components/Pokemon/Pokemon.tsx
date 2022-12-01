import Image from "next/image";
import { PokemonProps } from "../../data/types";
import styles from "../Pokemon/Pokemon.module.scss";

const Pokemon = ({ monster, index }: PokemonProps) => {
  const monsterIndex = ("000" + (index + 1)).slice(-3);

  return (
    <li className={styles.pokemon}>
      <div className={styles.pokemon__header}>
        <div className={styles.pokemon__nameWrapper}>
          <p className={styles.pokemon__name}>{monster.name}</p>
          <span className={styles.pokemon__number}>#{monsterIndex}</span>
        </div>
        <div className={styles.typeWrapper}>🥦</div>
      </div>
      <Image
        className={styles.pokemon__image}
        alt={monster.name}
        width={125}
        height={125}
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${monsterIndex}.png`}
        priority
      />
    </li>
  );
};

export default Pokemon;
