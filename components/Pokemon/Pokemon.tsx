import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PokemonProps } from "../../data/types";
import styles from "../Pokemon/Pokemon.module.scss";
import { motion as m, Variants } from "framer-motion";

const Pokemon = ({ monster, index }: PokemonProps) => {
  const [imageError, setImageError] = useState(false);
  const monsterIndex = ("000" + (index + 1)).slice(-3);

  const cardAnimation: Variants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
    imageHover: {
      y: -10,
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
      },
    },
  };

  return (
    <Link href={`/pokemon/${monster.name}`}>
      <m.li
        variants={cardAnimation}
        whileHover="hover"
        className={styles.pokemon}
      >
        <div className={styles.pokemon__header}>
          <div className={styles.pokemon__nameWrapper}>
            <p className={styles.pokemon__name}>{monster.name}</p>
            <span className={styles.pokemon__number}>#{monsterIndex}</span>
          </div>
        </div>
        <m.div variants={cardAnimation} whileHover="imageHover">
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
        </m.div>
      </m.li>
    </Link>
  );
};

export default Pokemon;
