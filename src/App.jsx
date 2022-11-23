import './styles/App.css';
import { animateScroll } from 'react-scroll';
import { Fade } from 'react-awesome-reveal';
import { Home, Nav, Projects, About, Mail } from './Components';
import { CgArrowLongUp } from 'react-icons/cg';

function App() {
  return (
    <main className='App'>
      <Nav />
      <Home />
      <div className='dark'>
        <Fade fraction={.2} triggerOnce>
          <Projects />
        </Fade>
        <Fade fraction={.2} triggerOnce>
          <About />
        </Fade>
      </div>
      <Fade fraction={.2} triggerOnce>
        <Mail />
      </Fade>
      <div className='dark'>
        <Fade fraction={.2} triggerOnce>
          <p>Thank you for scrolling💘</p>
          <div className='arrow' onClick={() => animateScroll.scrollToTop()}>
            <CgArrowLongUp />
          </div>
        </Fade>
      </div>
    </main>
  );
}

export default App;