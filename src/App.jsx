import './styles/App.css';
import { Fade } from 'react-awesome-reveal';
import { Home, Nav, Projects, About, Mail, Footer } from './Components';
function App() {
  return (
    <main className='App'>
      <Nav/>
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
          <Footer />
        </Fade>
      </div>
    </main>
  );
}

export default App;