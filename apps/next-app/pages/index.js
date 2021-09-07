import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { A } from '@mono/styled-library';
import B from '@mono/styled-library/dist/b';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <A />
      <B />
    </div>
  );
}
