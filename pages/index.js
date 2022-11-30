import Link from "next/link";
import Layout from "../components/Layout/Layout";
import Logo from "../components/Logo/Logo";
import styles from "../styles/Home.module.scss";

export default function Home({ pokemon }) {
  console.log(pokemon);
  return (
    <Layout title="The Next Pokedex">
      <Logo />
      <h1 className={styles.title}>The Next Pokedex.</h1>
      <ul className={styles.list}>
        {pokemon.map((monster, index) => (
          <li className={styles.card} key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <img
                className={styles.cardImage}
                src={monster.image}
                alt={monster.name}
              />
              <span>#{index}</span>
              {monster.name}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async (context) => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const { results } = await response.json();
    const pokemon = results.map((result, index) => {
      const tweakedId = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${tweakedId}.png`;

      return {
        ...result,
        image,
      };
    });

    return {
      props: { pokemon },
    };
  } catch (error) {
    console.error(error);
  }
};
