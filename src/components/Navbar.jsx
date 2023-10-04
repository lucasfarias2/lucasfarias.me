import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="bg-black text-white h-16 flex items-center md:px-16 px-8 shadow-lg relative justify-between">
      <h1 className="md:text-2xl text-xl md:mr-16 mr-4 code">Lucas Farias</h1>
      <div className="leading-0 text-sm flex items-center">
        <a
          href="https://www.linkedin.com/in/lucasfar/"
          className="text-neutral-200 code flex items-center md:mr-1 mr-4 md:hover:bg-neutral-200 md:hover:text-black rounded-lg md:p-2 md:px-4 justify-center"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="text-2xl mr-1" /> <span className="hidden md:inline-block">LinkedIn</span>
        </a>
        <a
          href="https://github.com/lucasfarias2"
          className="text-neutral-200 code flex items-center md:hover:bg-neutral-200 md:hover:text-black rounded-lg md:p-2 md:px-4 justify-center"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="text-2xl mr-1" /> <span className="hidden md:inline-block">Github</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
