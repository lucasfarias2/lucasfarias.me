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
        <div className="px-8 md:px-16 py-4">
          <h1 className="text-3xl mt-2 mb-4">Personal projects</h1>
          <div className="flex flex-wrap ">
            <HomeItem
              title="Track the Habit"
              bgColorClass="bg-rose-400"
              description="Personal habit tracker. Track your habits and see your progress."
              website="https://trackthehabit.com/"
              imgSrc="https://user-images.githubusercontent.com/19575942/272377305-5efa23e0-b4d1-4456-8066-61dfaf1299e2.png"
            />
            <HomeItem
              bgColorClass="bg-blue-400"
              title="Packlify Web SDK"
              description="React framework for large scale product applications."
              website="https://packlify.com/sdk/web"
              imgSrc="https://github.com/shopinpack/packlify-web/assets/19575942/1b5d6acb-5b71-4244-803d-7c5748b51e00"
              github="https://github.com/shopinpack/packlify-web"
            />
            <HomeItem
              wip={true}
              title="Packlify Cloud"
              description="Manage and deploy to multi-cloud with ease and integrate with Packlify tools."
              website="https://packlify.com/cloud"
              imgSrc="https://github.com/shopinpack/packlify-cloud-backend/assets/19575942/0ebaf279-222d-44e7-a7ea-f9239f5fbde0"
            />
          </div>
        </div>
      </main>
    </>
  );
}
