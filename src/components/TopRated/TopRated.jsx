import { Carousel, ContentWrapper, SwitchTabs } from '../../components';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const TopRated = () => {
  const [endpoint, setEndpoint] = useState('movie');

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <section className='carousel-section'>
      <ContentWrapper>
        <h2 className='carousel-section__title'>Top Rated</h2>
        <SwitchTabs data={['Movies', 'TV Shows']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </section>
  );
};

export default TopRated;
