import leftPurpleSVG from "./left-purple-blur.svg";
import rightWhiteSVG from "./right-white-blur.svg";
import middleCircleSVG from "./middle-circle-blur.svg";
import middlePurpleSVG from "./middle-purple-blur.svg";
import tinyCircleSVG from "./tiny-circle.svg";

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  const [firstName, lastName] = name.split(" ");
  return (
    <header className="relative bg-white dark:bg-custom-blue h-[900px]">
      <div className="mx-0 flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex flex-row">
          <img
            src={leftPurpleSVG}
            alt="left-purple-blob"
            className="absolute top-[10px] left-0 z-10 hidden md:flex"
          />
          <img
            src={tinyCircleSVG}
            alt="tiny-circle"
            className="absolute top-[240px] left-[310px] z-50 hidden md:flex"
          />
          <img
            src={tinyCircleSVG}
            alt="tiny-circle2"
            className="absolute top-[500px] left-[152px] z-50 hidden md:flex"
          />
          <div className="absolute mt-[260px] ml-[190px] space-x-[-440px] hidden md:flex">
            <img
              src={middlePurpleSVG}
              alt="middle-purple-blob"
              className="z-40"
            />
            <img
              src={middleCircleSVG}
              alt="middle-circle-blob"
              className="z-30"
            />
          </div>
          <img
            src={rightWhiteSVG}
            alt="right-white-blob"
            className="absolute top-[143px] right-[-30%] z-0 w-screen h-[900px] hidden md:flex"
          />
        </div>
        <div className="absolute top-1/4 left-12 md:top-[339px] md:left-[530px] text-cyan-100 font-bold  md:text-109 md:z-50">
          <div className="text-white font-semibold text-2xl md:text-3xl mb-5">
            Hello, I'm
          </div>
          <div className=" mt-[-20px] font-semibold text-[60px] md:text-109">
            {firstName}
          </div>
          <div className=" font-semibold text-[60px] text-2xl md:text-109">
            {lastName}
          </div>
        </div>
      </div>
    </header>
  );
};



export default Header;
