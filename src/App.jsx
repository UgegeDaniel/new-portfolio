import './styles/App.css';

import { animateScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';

// components
import { Home, Nav,Projects, Socials, About, Skills, Mail } from './Components';

// icon
import { CgArrowLongUp } from 'react-icons/cg';

function App() {
  return (
    <div className='App'>
      <div>
        <Nav />
        <Home />
      </div>
      <div className='dark'>
        <Fade fraction={.2} triggerOnce>
          <Projects />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <Socials />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <About />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <Skills />
        </Fade>
      </div>
      <div>
        <Fade fraction={.2} triggerOnce>
          <Mail />
        </Fade>
      </div>
      <div className='dark'>
        <Fade fraction={.2} triggerOnce>
          <p>Thank you for scrolling💘</p>
          <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;