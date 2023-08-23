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
    tools: ["C #","C++","Galil DMC"]
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
    tools: ["Solidworks","Fusion 360"]
  },
  {
    name: "The Gryphon Machine",
    tab: "Team 6070",
    role: "Robotics Engineer",
    date: "Spring 2022",
    tasks: [
      "Assumed a leadership role in a team of 15+ members, effectively coordinating diverse technology-related projects and initiatives.",
      "Facilitated various STEM activities and programs, aiming to foster enthusiasm and participation in the scientific community.",
    ],
    tools: ["Java","WPLib","Fusion 360"]
  },
];



const Experiences = () => {
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const { name, role, date, tasks, tools} = experiencesDetails[selectedExperienceIndex];

  return (
    <div className="relative ml-[221.7px] mt-[300px] h-[900px]" id="experiences-section">
      <h1 className="text-custom-pink font-bold text-xl absolute z-50">EXPERIENCES ⚒️</h1>
      <img src={experienceBlobSVG} alt="experience-blob" className="absolute z-0 left-[-130px] top-[-280px] h-[1300px]" />
      <div className="flex flex-row mt-[160px] ml-[300px] absolute z-50">
        <div className="text-white">
          <ul>
          {experiencesDetails.map((experience, index) => (
              <li
                key={index}
                className={`text-xl ${
                  selectedExperienceIndex === index
                    ? "text-blue-500"
                    : "hover:text-blue-500"
                } hover:cursor-pointer ${index !== 0 ? "mt-10" : null}`}
                onClick={() => setSelectedExperienceIndex(index)}
              >
                {experience.tab}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white flex flex-col ml-[60px]">
          <h1 className="text-[37px] font-black w-[527px] mb-[12px]">{name}</h1>
          <div className="flex flex-row align-center">
            <h1 className="text-xl">{role}</h1>
            <h1 className="text-xl ml-10 opacity-70">{date}</h1>
          </div>
          <ul className="list-disc w-[450px] mt-9 ml-4">
            {tasks.map((task, index) => (
              <li key={index} className={`text-[18px] leading-8 ${index !== 0 ? "mt-9" : null}`}>
                {task}
              </li>
            ))}
          </ul>
          <div className="flex flex-row mt-[50px] space-x-4  text-xl">
            {tools.map((tool,index) =>(
              <button key={index} className="px-4 py-2 bg-blue-950 text-blue-200 rounded-full border border-blue-900 hover:bg-blue-300">
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
