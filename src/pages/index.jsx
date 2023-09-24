import { AiFillLinkedin, AiFillGithub, AiOutlineLink } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { BiLogoReact } from 'react-icons/bi';

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
      <main className="p-6 md:p-8">
        <h1 className="text-2xl mb-1">Lucas Farias</h1>
        <p className="leading-0 text-sm flex items-center">
          <a
            href="https://www.linkedin.com/in/lucasfar/"
            className="text-blue-500 flex items-center mr-2"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="text-lg mr-1" /> LinkedIn
          </a>
          <a
            href="https://github.com/lucasfarias2"
            className="text-gray-500 flex items-center"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="text-lg mr-1" /> Github
          </a>
        </p>
        <h2 className="text-lg mt-4 border-t pt-4">Personal projects</h2>
        <div className="mt-2 flex items-center flex-wrap">
          <div className="bg-white mb-4 mr-2 rounded-lg shadow-sm border p-4 hover:scale-105 transition duration-200 ease-in-out hover:shadow-lg md:h-[480px] md:w-auto w-full">
            <h3 className="text-xl">Track the Habit</h3>
            <a
              href="https://trackthehabit.com"
              className="text-neutral-600 flex items-center mr-2 text-sm"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLink className="text-lg mr-1" /> trackthehabit.com
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://trackthehabit.com"
              className="md:mx-12 relative md:h-[300px] md:max-w-[600px] h-[240px] max-w-[300px] flex items-center mb-4"
            >
              <img
                className="w-[400px] md:w-[400px] bottom-0 rounded-2xl border-2 border-neutral-800 shadow-lg"
                src="https://i.imgur.com/9djUDXs.png"
                alt="Image of the app in Desktop"
              />
              <img
                className="w-[100px] md:w-[120px] absolute top-6 md:-right-4 right-0 shadow-lg rounded-2xl border-2 border-neutral-800"
                src="https://i.imgur.com/6Uu7VgH.png"
                alt="Image of the app in Web Mobile"
              />
            </a>
            <p>Habit tracker</p>
            <p className="text-sm text-neutral-600">Project is work in progress. More details soon.</p>
          </div>

          <div className="bg-white rounded-lg mb-4 mr-2 shadow-sm border p-4 hover:scale-105 transition duration-200 ease-in-out hover:shadow-lg md:h-[480px] md:w-fit w-full">
            <h3 className="text-xl">Packlify</h3>
            <a
              href="https://github.com/shopinpack/packlify-web"
              className="text-neutral-600 flex items-center mr-2 text-sm"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineLink className="text-lg mr-1" /> packlify.com
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shopinpack/packlify-web"
              className="w-full flex items-center mb-4 rounded-lg"
            >
              <div className="bg-orange-300 w-60 m-4 rounded-lg text-white flex items-center justify-center h-40">
                <FiPackage className="text-[72px] mr-1"/>
                <BiLogoReact className="text-[72px]" />
              </div>
            </a>
            <p>React Isomorphic Framework</p>
            <p className="text-sm text-neutral-600">
              Easily start your server-side rendered frontend React stack app with CLI tool packlify-start-app
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
