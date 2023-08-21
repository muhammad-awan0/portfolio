import './App.css'
import Navbar from './Navigation Bar/Navbar.tsx'
import Header from './Header/Header.tsx';
import About from './About/About.tsx';

function App() {

  return (
    <div className="font-outfit font-normal">
     <Navbar navItems={["about","experiences","projects","contact"]}/>
     <Header name={"Muhammad Awan."} />
     <About/>
    </div>
    
  )
}

export default App;
