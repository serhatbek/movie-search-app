import useFetch from '../../hooks/useFetch';
import Carousel from '../Carousel/Carousel';

const CarouselRecommendation = ({ mediaType, id }) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );
  return (
    <Carousel
      data={data?.results}
      loading={loading}
      title='Recommendations'
      endpoint={mediaType}
    />
  );
};

export default CarouselRecommendation;
