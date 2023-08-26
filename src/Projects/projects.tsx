import portfolioSVG from './Portfolio-img.svg';


interface ProjectDetails {
  name: string;
  image: string;
  details: string;
  tools: string[];
}

const projectsDetails: ProjectDetails[] = [
  {
    name: "This Website",
    image: portfolioSVG,
    details: "My very first personal project is this website, displaying my work experiences, interests, and journey as I become a more skilled developer",
    tools: ["Tailwind", "React", "Typescript"],
  },

  // ... other projects
];

interface ProjectCardProps {
  project: ProjectDetails;
  flipLayout: boolean;
}

const ProjectCard = ({ project, flipLayout }: ProjectCardProps) => {
  return (
    <div className={`relative flex flex-row w-[990px] ml-[90px] mt-[-100px] ${flipLayout ? 'flex-row-reverse' : 'flex-row'}`}>
      <img src={project.image} alt={project.name} className="z-10 mt-[200px] w-[494px] h-[332.99px]" />
      <div className={`flex flex-col self-center z-20 mt-[180px] ${flipLayout ? 'mr-[-50px]': 'ml-[-50px]'}`}>
        <h1 className={`mb-7 font-semibold text-[21px] text-[#3CA2AF] ${flipLayout ? 'text-left' : 'text-right'}`}>{project.name}</h1>
        <div className="flex flex-col">
          <p className="text-[18px] text-[#829DC7] shadow-md font-light border border-solid bg-[#040521] border-[#040521] rounded-md p-5">
            {project.details}
          </p>
          <div className={`flex flex-row space-x-4 text-cyan-300 mt-5 justify-center ${flipLayout ? 'mr-[290px]': 'ml-[290px]'} text-[14px]`}>
            {project.tools.map((tool, index) => (
              <p key={index} className="border border-cyan-600 bg-blue-950 border-solid p-2 rounded-2xl">
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
  return (
    <div className="ml-[221.7px] h-[800px]">
      <h1 id="projects-section" className="text-projects-purple font-bold text-[25px]">
        PERSONAL PROJECTS 🔥
      </h1>
      {projectsDetails.map((project, index) => (
        <ProjectCard key={index} project={project} flipLayout={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default Projects;
