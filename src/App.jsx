import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Publications from './sections/Publications';
import Certificates from './sections/Certificates';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import { Awards, ExtraCurricular } from './sections/OtherSections';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="font-sans text-gray-200 selection:bg-blue-500 selection:text-white relative bg-[#050505] min-h-screen">
      <BackgroundCanvas />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Publications />
          <Certificates />
          <Awards />
          <Experience />
          <ExtraCurricular />
          <Contact />
        </main>
        <Analytics />
      </div>

      <Footer />
    </div>
  );
}

export default App;
