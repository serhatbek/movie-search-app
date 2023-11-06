import { useState } from 'react';
import './HeroBanner.scss';
import { useNavigate } from 'react-router-dom';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

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
