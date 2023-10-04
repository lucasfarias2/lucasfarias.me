import classnames from 'classnames';
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

const HomeItem = ({ title, description, bgColorClass, website, imgSrc, Icon, github, wip }) => {
  const bg = !imgSrc ? bgColorClass : null;
  const w = wip ? 'pointer-events-none opacity-50' : null;

  return (
    <div
      className={classnames(
        'bg-white md:w-64 md:mr-4 rounded-lg shadow-md hover:shadow-lg overflow-hidden flex flex-col hover:scale-105 transition duration-200 ease-in-out mb-4 w-full',
        w
      )}
    >
      {wip && (
        <div className="bg-orange-500 text-white w-full text-center p-1 uppercase text-xs font-semibold">
          work in progress
        </div>
      )}
      <div className={classnames('flex items-center justify-center', bg)}>
        {(imgSrc || Icon) && (
          <div className="rounded-lg overflow-hidden p-2 h-40 flex justify-center items-center">
            {imgSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imgSrc} alt={website} className="w-full h-full object-cover rounded-lg" />
            ) : (
              !imgSrc && Icon && <Icon className="text-6xl text-white" />
            )}
          </div>
        )}
      </div>
      <div className="p-4 relative h-full flex flex-col justify-between">
        <div className="mb-8">
          <h4 className="text-2xl leading-5 brand">{title}</h4>
          <a href={website} target="_blank" className="text-xs text-gray-500 hover:underline" rel="noreferrer">
            {website}
          </a>
          <p className="leading-5 text-sm mt-4 text-gray-700">{description}</p>
        </div>
        <div>
          {github && (
            <a
              href={website}
              target="_blank"
              rel="noreferrer"
              className={classnames(
                'text-black font-medium p-2 border mb-1 rounded-lg text-sm hover:bg-black hover:text-white flex items-center justify-center'
              )}
            >
              <AiFillGithub className="text-lg mr-2" />
              Github
            </a>
          )}

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-black font-medium p-2 border rounded-lg text-sm hover:bg-black hover:text-white flex items-center justify-center"
          >
            <AiOutlineLink className="text-lg mr-2" />
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
