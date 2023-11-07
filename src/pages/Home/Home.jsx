import { HeroBanner, Trending } from '../../components';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
