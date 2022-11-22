import { HeadlineText, TypeWritterEffectText } from './index'
import './styles/Home.css'
import {HomeCta} from './index'
const Home = () => (
  <div className='home' id='home'>
    <div className="home-text">
      <HeadlineText />
      <TypeWritterEffectText />
      <HomeCta />
    </div>
  </div >
)
export default Home;
