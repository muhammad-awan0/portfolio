import githubSvg from "./github.svg";
import instaSvg from "./insta.svg";
import linkedinSvg from "./linkedin.svg";

interface Props {
  navItems: string[];
}
const Navbar = ({ navItems }: Props) => {
  return (
    <nav className="border-gray-200 bg-white dark:bg-custom-blue">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <div className="flex flex-row space-x-8 items-center align-middle">
          <a
            href="https://github.com/muhammad-awan0?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mt-1 hover:cursor-pointer" src={githubSvg} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mt-1 hover:cursor-pointer" src={instaSvg} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-awan-bb2331267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="mt-1 hover:cursor-pointer" src={linkedinSvg} />
          </a>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-custom-blue">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item}-section`}
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
