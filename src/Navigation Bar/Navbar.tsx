import { useState, useEffect } from 'react';
import githubSvg from './github.svg';
import instaSvg from './insta.svg';
import linkedinSvg from './linkedin.svg';
import resumeSVG from './resume.svg';


const navItems = ["about","experiences","project","contact"]

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="border-gray-200 bg-white dark:bg-custom-blue relative">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Social Media Links */}
        <div className="flex flex-row space-x-8 items-center align-middle">
          <a
            href="https://github.com/muhammad-awan0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mt-1 hover:cursor-pointer" src={githubSvg} alt="GitHub" />
          </a>
          <a
            href="https://instagram.com/muhammad.awan0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mt-1 hover:cursor-pointer" src={instaSvg} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-awan-bb2331267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mt-1 hover:cursor-pointer" src={linkedinSvg} alt="LinkedIn" />
          </a>
          <a
            href="https://drive.google.com/file/d/1p4hGs3bUl4gn6TXPMy3EvJ-WmjFPFq9t/view?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mt-1 hover:cursor-pointer" src={resumeSVG} alt="Resume" />
          </a>
        </div>
        {/* Navbar */}
        <div className={isMobile ? "relative" : ""}>
          {isMobile ? (
            <>
              <button onClick={() => setDropdownOpen(!isDropdownOpen)} className="text-white">
                <div className="h-1 w-5 bg-white mb-1"></div>
                <div className="h-1 w-5 bg-white mb-1"></div>
                <div className="h-1 w-5 bg-white"></div>
              </button>
              {isDropdownOpen && (
                <ul className="flex flex-col rounded-lg border bg-gray-50 p-4 font-medium dark:bg-gray-800 absolute top-full right-[-4px] w-auto z-10">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a href={`#${item}-section`} className="block py-2 pl-3 pr-4 text-white gray-900 hover:text-blue-500">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <div className="hidden w-full md:block md:w-auto">
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-custom-blue">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a href={`#${item}-section`} className="block py-2 pl-3 pr-4 text-white hover:text-blue-500 ">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



