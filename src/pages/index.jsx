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
      <main className="p-8">
        <h1 className="text-xl">Lucas Farias</h1>
        <h2 className="">Projects</h2>
      </main>
    </>
  );
}
