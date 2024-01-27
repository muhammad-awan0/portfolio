import { useState } from "react";
import experienceBlobSVG from "./Experience-Blob.svg";

const experiencesDetails = [
  {
    name: "UTEX Scientific Instruments",
    tab: "UTEX",
    role: "Product Development Engineer",
    date: "Summer 2023",
    tasks: [
      "Developed an automatic UI constructor capable of creating any user-specified UI on the spot for interaction with non-destructive equipment.",
      "Assisted other engineers in the hardware assembly of new non destructive equipment ; worked with industrial motion controllers and electrical diagrams.",
    ],
    tools: ["C #", "C++", "Galil DMC"],
  },
  {
    name: "Kazimoto Engineering",
    tab: "Kazimoto",
    role: "Software Engineer",
    date: "2022 - 2023",
    tasks: [
      "Successfully designed and tested a purely mechanical ballistics device utilizing Fusion 360, showcasing excellent attention to detail and a result-oriented approach. ",
      "Worked hands-on with various metals to construct prototypes, further demonstrating a commitment to quality and workmanship.",
    ],
    tools: ["Solidworks", "Fusion 360"],
  },
  {
    name: "The Gryphon Machine",
    tab: "Team 6070",
    role: "Head Captain",
    date: "Spring 2022",
    tasks: [
      "Assumed a leadership role in a team of 50+ members, effectively coordinating diverse technology-related projects and initiatives.",
      "Facilitated various STEM activities and programs, aiming to foster enthusiasm and participation in the scientific community.",
    ],
    tools: ["Java", "WPLib", "Fusion 360"],
  },
  {
    name: "MIT-PIT-RW",
    tab: "MIT Driverless",
    role: "Software Developer",
    date: "Fall 2023",
    tasks: [
      "Collaborated in a team of 30+ to develop an autonomous race car for the Indy Autonomous Challenge",
      "Played a pivotal role in programming and integrating autonomous path planning and decision making.",
      "Simulated vehicle navigation and performed trajectory analysis!"
    ],
    tools: ["Python", "ROS2","Numpy","matplotlib"],
  },
];

const Experiences = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const { name, role, date, tasks, tools } = experiencesDetails[selectedExperienceIndex];

  return (
    <div className="mt-48 md:mt-0 ml-12 md:relative md:ml-[221.7px] h-[900px]" id="experiences-section">
      <h1 className="text-heading-blue font-bold text-4xl absolute z-50">
      ⚒️ Experiences 
      </h1>
      <img
        src={experienceBlobSVG}
        alt="experience-blob"
        className="absolute hidden md:block z-0 left-[-150px] top-[-280px] h-[1300px]"
      />
      <div className="flex flex-col md:flex-row mt-24 md:mt-[130px] md:ml-[280px] absolute z-50">
        <div className="text-white flex flex-row md:flex-col">
          <ul className="flex flex-row md:flex-col space-x-4 md:mt-4 md:space-x-0 md:space-y-10">
            {experiencesDetails.map((experience, index) => (
              <li
                key={index}
                className={`md:text-lg ${
                  selectedExperienceIndex === index
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } hover:cursor-pointer`}
                onClick={() => setSelectedExperienceIndex(index)}
              >
                {experience.tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white mt-10 md:mt-0 flex flex-col md:ml-[60px]">
          <h1 className="text-[27px] md:text-[37px] font-black w-[527px] mb-[12px]">{name}</h1>
          <div className="flex flex-row align-center">
            <h1 className="md:text-xl">{role}</h1>
            <h1 className="md:text-xl ml-10 opacity-70">{date}</h1>
          </div>
          <ul className="list-disc w-[400px] md:w-[450px] mt-9 md:ml-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`md:text-[18px] ml-5 leading-8 text-[#D7F9FF] ${
                  index !== 0 ? "mt-9" : null
                }`}
              >
                {task}
              </li>
            ))}
          </ul>
          <div className="flex flex-row mt-[50px] space-x-4 md:text-xl">
            {tools.map((tool, index) => (
              <button
                key={index}
                className="px-2 py-1 bg-blue-950 text-blue-200 rounded-full border border-blue-900"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;