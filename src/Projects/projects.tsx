import portfolioSVG from './Portfolio-img.svg'
import middleBlob from './middle-blob.svg';


const projectsDetails = [
    {
      name: "This Website",
      details: "It's my first personal project, and a place where I've chosen to showcase my work experiences, interests, and progress as I continue to learn and grow. Here, you'll find insights into my passion for programming and robotics, along with examples of projects and challenges I've undertaken. It's a reflection of my commitment to continual learning and my love for trying new things",
      tools: ["C #","C++","Galil DMC"]
    },
  ];


  const Projects = () => {
    return (
        <div className="ml-[221.7px]">
            <h1 id="projects-section" className="text-projects-purple font-bold text-[25px]">PERSONAL PROJECTS 🔥</h1>
            <div className="relative flex flex-row ml-[86px] w-[990px] h-[auto] mt-[-90px]"> 
                <img src={middleBlob} alt="middleBlobIMG" className="absolute" /> 
                <img src={portfolioSVG} alt="portfolioImg" className="z-10 mt-[200px] w-[900px]" /> 
                <div className="flex flex-col ml-10 self-center z-20 mt-[180px]"> 
                    <h1 className='mb-7 ml-[290px] font-semibold text-[21px] text-[#3CA2AF]'>This Website!!</h1>
                    <div className='flex flex-col'>
                      <p className='ml-[-90px] text-[18px] text-[#829DC7] font-light border border-solid bg-[#040521] border-[#040521] rounded-md p-5'>My very first personal project is this website, displaying my work experiences, interests and journey as I become a more skilled developer</p>
                      <div className='flex flex-row space-x-4 text-cyan-600 mt-4 ml-[-10px]'>
                        <p>Tailwind</p>
                        <p>React</p>
                        <p>TS</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;