import type { NextPage } from 'next';
import Head from 'next/head';
import HomePage from '@pages/HomePage';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Something text" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
