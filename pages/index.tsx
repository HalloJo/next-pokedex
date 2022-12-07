import { GetStaticProps } from "next";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Pokemon from "../components/Pokemon/Pokemon";
import { InitialPokemonProps } from "../data/types";
import styles from "../styles/Home.module.scss";
import { motion as m, Variants } from "framer-motion";

export default function Home({ initialPokemon }: InitialPokemonProps) {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const [pokemonOffset, setPokemonOffset] = useState(0);

  const fetchPokemon = async (url: string, next: boolean) => {
    const response = await fetch(url);
    const nextPokemon = await response.json();
    setPokemon(nextPokemon);
    setPokemonOffset(next ? pokemonOffset + 20 : pokemonOffset - 20);
  };

  const cardItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        // delayChildren: 1,
        duration: 0.3,
      },
    },
  };

  return (
    <Layout title="The Next Pokedex">
      <div className={styles.buttons}>
        <button
          onClick={() => fetchPokemon(pokemon.previous, false)}
          className={`${styles.button} ${
            !pokemon.previous ? styles.disabled : null
          }`}
        >
          &larr;
        </button>
        <button
          onClick={() => fetchPokemon(pokemon.next, true)}
          className={`${styles.button} ${
            !pokemon.next ? styles.disabled : null
          }`}
        >
          &rarr;
        </button>
      </div>
      <m.ul
        initial="hidden"
        whileInView="visible"
        variants={cardItem}
        className={styles.list}
      >
        {pokemon.results.map((monster, index) => (
          <m.div key={index} variants={cardItem}>
            <Pokemon
              key={index}
              monster={monster}
              index={index + pokemonOffset}
            />
          </m.div>
        ))}
      </m.ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const initialPokemon = await response.json();

  return {
    props: {
      initialPokemon,
    },
  };
};
