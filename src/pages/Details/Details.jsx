import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import './Details.scss';
import {
  CarouselRecommendation,
  CarouselSimilar,
  Cast,
  DetailsBanner,
  VideosSection,
} from '../../components';

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <CarouselSimilar mediaType={mediaType} id={id} />
      <CarouselRecommendation mediaType={mediaType} id={id} />
    </div>
  );
};

export default Details;
