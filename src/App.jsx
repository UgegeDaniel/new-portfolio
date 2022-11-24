import './styles/App.css';
import { Fade } from 'react-awesome-reveal';
import { Home, Nav, Projects, About, Mail, Footer } from './Components';
import { useRef } from 'react';

function App() {
  const homeSection = useRef(null);
  const projectsSection = useRef(null);
  const aboutSection = useRef(null);
  const mailSection = useRef(null);
  const sections = [homeSection, projectsSection, mailSection, aboutSection]
  return (
    <main className='App'>
      <Nav sections={sections}/>
      <Home section={homeSection}/>
      <div className='dark'>
        <Fade fraction={.2} triggerOnce>
          <Projects section={projectsSection}/>
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <About section={aboutSection}/>
        </Fade>
      </div>
      <Fade fraction={.2} triggerOnce>
        <Mail section={mailSection}/>
      </Fade>
      <div className='dark'>
        <Fade fraction={.2} triggerOnce>
          <Footer />
        </Fade>
      </div>
    </main>
  );
}

export default App;