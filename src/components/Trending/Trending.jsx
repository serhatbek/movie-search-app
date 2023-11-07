import './Trending.scss';
import { Carousel, ContentWrapper, SwitchTabs } from '../../components';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

const Trending = () => {
  const [endpoint, setEndpoint] = useState('day');

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Day' ? 'day' : 'week');
  };

  return (
    <section className='carousel-section'>
      <ContentWrapper>
        <h2 className='carousel-section__title'>Trending</h2>
        <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </section>
  );
};

export default Trending;
