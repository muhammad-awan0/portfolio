import leftPurpleSVG from './left-purple-blur.svg';
import rightWhiteSVG from './right-white-blur.svg';
import middleCircleSVG from './middle-circle-blur.svg';
import middlePurpleSVG from './middle-purple-blur.svg';
import tinyCircleSVG from './tiny-circle.svg';

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <header className="relative bg-white dark:bg-custom-blue">
      <div className="mx-0 flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex flex-row">
          <img src={leftPurpleSVG} alt="left-purple-blob" className="absolute top-[10px] left-0 z-10" />
          <img src={tinyCircleSVG} alt="tiny-circle" className='absolute top-[280px] left-[20px] z-50' />
          <div className='absolute mt-[260px] ml-[190px] flex space-x-[-440px]'>
            <img src={middlePurpleSVG} alt="middle-purple-blob" className="z-40" />
            <img src={middleCircleSVG} alt="middle-cirlce-blob" className="z-30" />
          </div>
          <img src={rightWhiteSVG} alt="right-purple-blob" className="absolute top-[143px] right-[-30%] z-0 w-screen h-[900px]" />
        </div>
        <div className="z-50 absolute top-[339px] left-[530px] text-cyan-100 font-bold text-109 md:top-[339px] md:left-[530px]">
          <div className="text-white font-semibold text-3xl mb-5">Hello, I'm</div>
          <div>{firstName}</div>
          <div>{lastName}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
