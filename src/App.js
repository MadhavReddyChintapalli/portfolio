import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Skills from './components/layout/Skills';
import Experience from './components/layout/Experience';
import Education from './components/layout/Education';
import Contact from './components/layout/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
