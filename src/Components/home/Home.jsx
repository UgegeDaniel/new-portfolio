import './styles/Home.css'
import { Link } from 'react-scroll';
import { HeadlineText, TypeWritterEffectText } from './index'
import { handleDownload } from '../../utils'
const Home = () => (
  <div className='home' id='home'>
    <div className="home-text">
      <HeadlineText />
      <TypeWritterEffectText />
      <div className="btns">
        <Link className='btn1' activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
          Hire Me
        </Link>
        <div onClick={handleDownload} className='btn2'>View Resume</div>
      </div>
    </div>
  </div >
)

export default Home;
