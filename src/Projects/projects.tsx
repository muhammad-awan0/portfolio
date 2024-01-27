import React, { useEffect, useState } from 'react';

// Import your SVG assets
import portfolioSVG from './Portfolio-img.svg';
import playingcardSVG from './beakman_Aces.svg';
import calliopeLogo from './calliope-logo.png';

// Define the type for each project's details
interface ProjectDetails {
  name: string;
  image: string;
  details: string;
  tools: string[];
  repo: string;
}

// An array of projects
const projectsDetails: ProjectDetails[] = [
  {
    name: 'This Website!',
    image: portfolioSVG,
    details:
      'My very first personal project is this website, displaying my work experiences, interests, and journey as I become a skilled developer',
    tools: ['Tailwind', 'React', 'Typescript', 'Node.JS'],
    repo: 'https://github.com/muhammad-awan0/portfolio',
  },
  {
    name: 'Markovian Blackjack Analysis',
    image: playingcardSVG,
    details:
      'Conducted a comprehensive analysis of blackjack using Markov Chains to deduce optimal strategies for beating the house!',
    tools: ['Python', 'Numpy'],
    repo: 'https://drive.google.com/file/d/19JkWsUmtKEP-PXMiNYVAxsAapI7Thyqm/view?usp=sharing',
  },
  {
    name: 'Calliope',
    image: calliopeLogo,
    details:
      'Calliope is as an AI-powered music recommendation system crafted using the MERN stack and Flask. Through a custom music recommendation algorithm, Calliope can analyze various aspects of your preferred songs, from acoustics to valence, and present a curated list of similar tracks.',
    tools: ['React-Redux', 'Javascript', 'Node.JS', 'Spotify-API', 'Python', 'scikit-learn'],
    repo: 'https://drive.google.com/file/d/19JkWsUmtKEP-PXMiNYVAxsAapI7Thyqm/view?usp=sharing',
  },
];

// Component for individual project cards
const ProjectCard: React.FC<{ project: ProjectDetails }> = ({ project }) => {
  return (
    <div className="mt-10 max-w-xl mx-auto my-8 bg-gray-900 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <a href={project.repo} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
      </a>
      <div className="p-6">
        <h2 className="text-xl text-teal-300 font-semibold hover:underline">
          {project.name}
        </h2>
        <p className="text-gray-300 mt-2">{project.details}</p>
        <div className="mt-4">
          {project.tools.map((tool, index) => (
            <span key={index} className="inline-block bg-teal-700 text-teal-200 rounded-full px-3 py-1 text-sm font-medium mr-2 mb-2">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Projects component
const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="pt-12 pb-24 px-4 md:px-12">
      <h1 className= {`font-bold absolute z-50 text-violet-600 ${isMobile ? 'text-4xl ml-10' : 'text-4xl ml-32'}`}>
      🔥 Personal Projects
      </h1>
      
      <div className="space-y-8">
        {projectsDetails.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <h2 className="text-3xl text-center text-teal-300 mt-20">
        More Coming Soon!
      </h2>
    </div>
  );
};

export default Projects;
