import { HeadlineText, TypeWritterEffectText } from './index'
import './styles/Home.css'
import { HomeCta, Socials, Skills } from './index'
const Home = ({ section }) => (
    <div className="home-text" id='home' ref={section}>
      <HeadlineText />
      <TypeWritterEffectText />
      <HomeCta />
      <Socials />
      <Skills />
    </div>
)
export default Home;
