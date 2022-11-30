import Head from "next/head";
import { ReactNode } from "react";
import styles from "../Layout/Layout.module.scss";

type LayoutProps = {
  title: string;
  children: ReactNode;
};

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="The Next Pokedex for your convenience"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
