import { GetServerSideProps } from "next";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import { getBackgroundColor, PokemonPageProps } from "../../data/types";
import Image from "next/image";
import styles from "styles/Page.module.scss";
import { useState } from "react";
const PokemonPage = ({ pokemonPageData }: PokemonPageProps) => {
  console.log(pokemonPageData);
  const [imageError, setImageError] = useState(false);
  const monsterIndex = ("000" + pokemonPageData.id).slice(-3);

  return (
    <Layout title={pokemonPageData.name}>
      <div className={styles.page}>
        <Link href="..">
          <button className={styles.page__link}>&larr;</button>
        </Link>
        <div className={styles.page__imageWrapper}>
          <Image
            className={styles.page__image}
            alt={pokemonPageData.name}
            width={300}
            height={300}
            src={
              !imageError
                ? `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${monsterIndex}.png`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
            }
            onError={() => setImageError(true)}
            priority
          />
          <div className={styles.page__info}>
            <p className={styles.page__name}>{pokemonPageData.name}</p>
            <ul className={styles.page__typesList}>
              {pokemonPageData.types.map((type) => (
                <li
                  key={type.slot}
                  className={`${styles.page__typeItem} ${getBackgroundColor(
                    type.type.name
                  )}`}
                >
                  {type.type.name}
                </li>
              ))}
            </ul>
            <ul className={styles.page__statsList}>
              <h3 className={styles.page__statsTitle}>Stats</h3>
              {pokemonPageData.stats.map((stat, index) => (
                <div key={index} className={styles.page__statsWrapper}>
                  <div
                    className={styles.page__stat}
                    style={{ width: `${stat.base_stat}%` }}
                  >
                    {stat.base_stat}
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <p className={styles.page__index}>#{monsterIndex}</p>
        </div>
      </div>
    </Layout>
  );
};

export default PokemonPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  );
  const pokemonPageData = await response.json();

  return {
    props: { pokemonPageData },
  };
};
