import './CarouselSimilar.scss';
import useFetch from '../../hooks/useFetch';
import Carousel from '../Carousel/Carousel';

const CarouselSimilar = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);
  const title = mediaType === 'tv' ? 'Similar TV Shows' : 'Similar Movies';
  return (
    <Carousel
      title={title}
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

export default CarouselSimilar;
