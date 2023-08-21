import portraitSVG from './Portrait.svg';

const About = () => {
  return (
    <div className="ml-[221.7px] mt-[300px]" id="about-section">
      <h1 className="text-custom-pink font-bold text-xl">ABOUT ME 💬</h1>
      <div className="flex flex-row">
        <div className="text-white w-[628px] h-[478px] text-xl mr-10 leading-9">
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
        <img className="mb-10 ml-10" src={portraitSVG} alt="portrait-MuhammadAwan" />
      </div>
    </div>
  );
}

export default About;
