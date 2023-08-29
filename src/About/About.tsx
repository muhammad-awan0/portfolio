import portraitSVG from './Portrait.svg';

const About = () => {
  return (
    <div className="ml-12 md:ml-[221.7px] md:mt-[300px] md:h-[900px]" id="about-section">
      <h1 className="text-custom-pink font-bold text-[25px]">💬 About Me </h1>
      <div className="flex flex-col md:flex-row mt-5">
        <div className="text-white w-[400px] md:w-[628px] h-[478px] md:text-xl mr-10 leading-8 md:leading-9 opacity-80">
          <p className='mt-3'>
            During middle school, my teacher decided to introduce me to the wonderful
            world of programming through Scratch; however, after about half an hour, I
            dismissed it as lame.
          </p>

          <p className='mt-10'>
            Cut to today, and I am now heading off to <span className='text-about-me-blue'>the University
              of Waterloo to study Computer Science</span>. As I developed, so did my enjoyment for
            trying new things and learning to love learning. Although I am seemingly on a
            path to a career in Software, I absolutely adore electronics and hardware
            (especially robotics)
          </p>

          <p className='mt-10'>
            Anyways, here on my website, I hope to share my
            <span className='text-about-me-blue'>experiences, projects, and insights</span> as I continue to grow and explore!
          </p>
        </div>
        <img className="mb-10 mt-20 mr-10 md:mt-0 md:mr-0 " src={portraitSVG} alt="portrait-MuhammadAwan" />
      </div>
    </div>
  );
}

export default About;
