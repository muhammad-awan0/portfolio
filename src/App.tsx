import './App.css'
import Navbar from './Navigation Bar/Navbar.tsx'
import Header from './Header/Header.tsx';
import About from './About/About.tsx';
import Experiences from './Experiences/Experiences.tsx';
import Projects from './Projects/projects.tsx';
import Contact from './Contact/Contact.tsx';
import ScrollFadeIn from './Scroll.tsx';


function App() {
  return (
    <div className="font-outfit font-normal bg-custom-blue">
      <Navbar navItems={["about","experiences","projects","contact"]} />
      <Header name={"Muhammad Awan."} />
      <ScrollFadeIn>
        <About />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Experiences />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Projects />
      </ScrollFadeIn>
      <ScrollFadeIn>
        <Contact />
      </ScrollFadeIn>
    </div>
  );
}

export default App;
