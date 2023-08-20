import './App.css'
import Navbar from './Navigation Bar/Navbar.tsx'
import Header from './Header/Header.tsx';

function App() {

  return (
    <div className="font-outfit font-normal">
     <Navbar navItems={["about","experiences","projects","contact"]}/>
     <Header name={"Muhammad Awan."} />
    </div>
    
  )
}

export default App;
