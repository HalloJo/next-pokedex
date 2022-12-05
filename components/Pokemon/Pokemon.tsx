import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PokemonProps } from "../../data/types";
import styles from "../Pokemon/Pokemon.module.scss";

const Pokemon = ({ monster, index }: PokemonProps) => {
  const [imageError, setImageError] = useState(false);
  const monsterIndex = ("000" + (index + 1)).slice(-3);

  return (
    <Link href={`/pokemon/${monster.name}`}>
      <li className={styles.pokemon}>
        <div className={styles.pokemon__header}>
          <div className={styles.pokemon__nameWrapper}>
            <p className={styles.pokemon__name}>{monster.name}</p>
            <span className={styles.pokemon__number}>#{monsterIndex}</span>
          </div>
        </div>
        <Image
          className={styles.pokemon__image}
          alt={monster.name}
          width={125}
          height={125}
          src={
            !imageError
              ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${monsterIndex}.png`
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
          }
          onError={() => setImageError(true)}
          priority
        />
      </li>
    </Link>
  );
};

export default Pokemon;
