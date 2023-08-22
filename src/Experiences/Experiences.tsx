import { useState } from "react";

const Experiences = () => {
  const experiencesTab = ["UTEX", "Kazimoto", "Team 6070"];
  const experiences = ["UTEX Scientific Instruments", "Kazimoto Engineering", "The Gryphon Machine"]
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <div className="ml-[221.7px] mt-[300px]" id="experiences-section">
      <h1 className="text-custom-pink font-bold text-xl">EXPERIENCES ⚒️</h1>
      <div className="flex flex-row mt-[97px] ml-[383px]">
        <div className="text-white">
          <ul>
            {experiencesTab.map((exp, index) => (
              <li
                key={index}
                className={`text-xl ${selectedExperience === index ? 'text-blue-500' : 'hover:text-blue-500'} hover:cursor-pointer ${index != 0 ? 'mt-10': null}`}
                onClick={() => setSelectedExperience(index)}
              >
                {exp}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-white">
          <h1>{experiences[selectedExperience]}</h1>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
