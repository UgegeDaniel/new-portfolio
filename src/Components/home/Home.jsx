import { HeadlineText, TypeWritterEffectText } from './index'
import './styles/Home.css'
import { HomeCta, Socials, Skills } from './index'
const Home = ({ padding }) => (
  <div className='home' id='home'>
    <div className="home-text">
      <HeadlineText />
      <TypeWritterEffectText />
      <HomeCta />
      <Socials padding={padding} />
    </div>
    <Skills padding={padding}/>
  </div >
)
export default Home;
