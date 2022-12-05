import Head from "next/head";
import { ReactNode } from "react";
import styles from "../Layout/Layout.module.scss";
import Logo from "../Logo/Logo";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="The Next Pokedex for your convenience"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <header className={styles.header}>
        <Logo />
        <h1 className={styles.title}>The Next Pokedex</h1>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
