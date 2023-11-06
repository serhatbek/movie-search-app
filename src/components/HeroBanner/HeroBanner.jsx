import { useEffect, useState } from 'react';
import './HeroBanner.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch('/movie/upcoming');
  // console.log('upcoming 🩷🩷🩷', data);
  console.log('bg 🩷🩷🩷', background);

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <section className='hero-banner'>
      <div className='wrapper'>
        <div className='hero-banner__content'>
          <span>Welcome.</span>
          <span>
            Millions of movies, TV shows and people to discover Explore now.
          </span>
          <div className='hero-banner__search'>
            <input
              type='text'
              name='search'
              placeholder='Search for a movie or tv show...'
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
