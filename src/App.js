import Navbar from './components/layout/Navbar';
import './App.css';
import Home from './components/layout/Home';
import About from './components/layout/About';
import Skills from './components/layout/Skills';
import Experience from './components/layout/Experience';
import Education from './components/layout/Education';
import Contact from './components/layout/Contact';
import Projects from './components/layout/Projects';
import Footer from './components/layout/Footer';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
