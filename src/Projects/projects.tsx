import { useEffect, useState } from "react";
import portfolioSVG from "./Portfolio-img.svg";
import playingcardSVG from "./beakman_Aces.svg";

interface ProjectDetails {
  name: string;
  image: string;
  details: string;
  tools: string[];
  repo: string;
}

const projectsDetails: ProjectDetails[] = [
  {
    name: "This Website!",
    image: portfolioSVG,
    details:
      "My very first personal project is this website, displaying my work experiences, interests, and journey as I become a skilled developer",
    tools: ["Tailwind", "React", "Typescript","Node.JS"],
    repo: "https://github.com/muhammad-awan0/portfolio",
  },
  {
    name: "Markovian Blackjack Analysis",
    image: playingcardSVG,
    details:
      "Conducted a comprehensive analysis of blackjack using Markov Chains to deduce optimal strategies for beating the house!",
    tools: ["Python", "Numpy"],
    repo: "https://drive.google.com/file/d/19JkWsUmtKEP-PXMiNYVAxsAapI7Thyqm/view?usp=sharing",
  },
];

interface ProjectCardProps {
  project: ProjectDetails;
  flipLayout?: boolean;
}

const ProjectCardMobile = ({ project }: ProjectCardProps) => {
  return (
    <div className="flex flex-col items-start w-full ml-3 mt-20">
      {/* Title */}
      <h1 className="mb-2 font-semibold text-[21px] text-[#3CA2AF] w-full text-left">
        <a className= "hover:text-teal-300 duration-300" href={project.repo}>{project.name}</a>
      </h1>
      
      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="w-[400px] mt-[-50px] h-[400px] mb-2"
      />
      
      {/* Details */}
      <div className="flex flex-col w-[445px] ">
        <p className="text-[#829DC7] mt-[-50px] shadow-md font-light border border-solid bg-[#040521] border-[#040521] rounded-md p-3 mb-2 w-full">
          {project.details}
        </p>
      </div>
      
      {/* Tools */}
      <div className="flex flex-row space-x-4 text-cyan-300 mt-1 justify-start w-full">
        {project.tools.map((tool, index) => (
          <p
            key={index}
            className="border border-cyan-600 bg-blue-950 border-solid p-2 rounded-2xl"
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
};

const ProjectCardDesktop = ({ project, flipLayout }: ProjectCardProps) => {
  return (
    <div
      className={`relative flex flex-md:flex-row w-[990px] md:ml-[90px] mt-[-100px] ${
        flipLayout ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <img
        src={project.image}
        alt={project.name}
        className="z-10 mt-[200px] w-[494px] h-[332.99px] hue-rotate-[10deg] hover:hue-rotate-0 duration-1000 hover:cursor-pointer blur-sm hover:blur-none"
      />
      <div
        className={`flex flex-col self-center z-20 mt-[180px] ${
          flipLayout ? "mr-[-50px]" : "ml-[-50px]"
        }`}
      >
        <h1
          className={`mb-7 font-semibold text-[21px] text-[#3CA2AF]  ${
            flipLayout ? "text-left" : "text-right"
          }`}
        >
          <a className= "hover:text-teal-300 duration-300" href={project.repo}>{project.name}</a>
        </h1>
        <div className="flex flex-col">
          <p className="text-[18px] text-[#829DC7] shadow-md font-light border border-solid bg-[#040521] border-[#040521] rounded-md p-5">
            {project.details}
          </p>
          <div
            className={`flex flex-row space-x-4 text-cyan-300 mt-5 justify-center ${
              flipLayout ? "mr-[290px]" : "ml-[290px]"
            } text-[14px]`}
          >
            {project.tools.map((tool, index) => (
              <p
                key={index}
                className="border border-cyan-600 bg-blue-950 border-solid p-2 rounded-2xl"
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="ml-12 md:ml-[221.7px]">
      <h1
        id="projects-section"
        className="text-projects-purple font-bold text-[25px]"
      >
        🔥 Personal Projects
      </h1>
      {projectsDetails.map((project, index) =>
        isMobile ? (
          <ProjectCardMobile key={index} project={project} />
        ) : (
          <ProjectCardDesktop
            key={index}
            project={project}
            flipLayout={index % 2 !== 0}
          />
        )
      )}
      <h1 className="text-white text-5xl mt-52 md:ml-[405px]">
        More Coming Soon!
      </h1>
    </div>
  );
};

export default Projects;
