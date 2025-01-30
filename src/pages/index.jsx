import HomeItem from '../components/HomeItem';
import Navbar from '../components/Navbar';
import { AiOutlineCloud } from 'react-icons/ai';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Farias</title>
        <meta name="description" content="Lucas Farias portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
