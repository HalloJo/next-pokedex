import Head from "next/head";
import Logo from "../components/Logo/Logo";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Next Pokedex</title>
        <meta
          name="description"
          content="The Next Pokedex for your convenience"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Logo />
        <h1 className={styles.title}>The Next Pokedex.</h1>
      </main>
    </div>
  );
}
