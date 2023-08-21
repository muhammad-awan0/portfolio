import './App.css'
import Navbar from './Navigation Bar/Navbar.tsx'
import Header from './Header/Header.tsx';
import About from './About/About.tsx';
import Experiences from './Experiences/Experiences.tsx';

function App() {

  return (
    <div className="font-outfit font-normal">
     <Navbar navItems={["about","experiences","projects","contact"]}/>
     <Header name={"Muhammad Awan."} />
     <About/>
     <Experiences />
    </div>
    
  )
}

export default App;
