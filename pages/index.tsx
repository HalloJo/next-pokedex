import { GetStaticProps } from "next";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Pokemon from "../components/Pokemon/Pokemon";
import { InitialPokemonProps } from "../data/types";
import styles from "../styles/Home.module.scss";

export default function Home({ initialPokemon }: InitialPokemonProps) {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const [pokemonOffset, setPokemonOffset] = useState(0);

  const fetchPokemon = async (url: string, next: boolean) => {
    const response = await fetch(url);
    const nextPokemon = await response.json();
    setPokemon(nextPokemon);
    setPokemonOffset(next ? pokemonOffset + 20 : pokemonOffset - 20);
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
      <ul className={styles.list}>
        {pokemon.results.map((monster, index) => (
          <Pokemon
            key={index}
            monster={monster}
            index={index + pokemonOffset}
          />
        ))}
      </ul>
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
