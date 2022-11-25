import { HeadlineText, TypeWritterEffectText } from './index'
import './styles/Home.css'
import { HomeCta, Socials, Skills } from './index'
const Home = ({ section }) => (
  <div className='home' id='home' ref={section}>
    <div className="home-text">
      <HeadlineText />
      <TypeWritterEffectText />
      <HomeCta />
      <Socials />
      <Skills />
    </div>
  </div >
)
export default Home;
