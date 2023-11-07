import { useEffect, useState } from 'react';
import './HeroBanner.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useSelector } from 'react-redux';
import { ImageLazyLoad, ContentWrapper } from '../../components';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const { data, loading } = useFetch('/movie/upcoming');

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
      {!loading && (
        <div className='backdrop-img'>
          <ImageLazyLoad src={background} />
        </div>
      )}

      <div className='opacity-layer'></div>

      <ContentWrapper>
        <div className='hero-banner__content'>
          <span className='hero-banner__content__title'>Welcome.</span>
          <span className='hero-banner__content__subtitle'>
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
      </ContentWrapper>
    </section>
  );
};

export default HeroBanner;
