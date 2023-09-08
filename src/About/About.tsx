import portraitSVG from './Portrait.svg';

const About = () => {
  return (
    <div className="ml-12 md:ml-[221.7px] md:mt-[300px] md:h-[900px]" id="about-section">
      <h1 className="text-custom-pink font-bold text-[25px]">💬 About Me </h1>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="text-white w-[400px] md:w-[628px] h-[478px] md:text-xl mr-10 leading-8 md:leading-9 opacity-80">
          <p className='mt-3'>
          Hello and welcome! I'm on the brink of an exciting new chapter as I prepare to enter the <span className='text-about-me-blue'>Computer Science program at the University of Waterloo</span>. Over the years, I've found myself increasingly enamored with the intricacies of software development.
          </p>

          <p className='mt-10'>
          Regarding this website, it's not just a digital resume; consider it more as a window into my journey in the dynamic world of computer science. Here, you can browse through a curated portfolio of my projects, which range from small utilities to more ambitious ventures. 
          </p>

          <p className='mt-10'>
            I hope to share my
            <span className='text-about-me-blue'> experiences, projects, and insights</span> as I continue to grow and explore!
          </p>
        </div>
        <img className="mb-10 mt-20 mr-10 md:mt-0 md:mr-0 " src={portraitSVG} alt="portrait-MuhammadAwan" />
      </div>
    </div>
  );
}

export default About;
