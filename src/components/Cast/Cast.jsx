import './Cast.scss';
import { useSelector } from 'react-redux';
import { ContentWrapper, ImageLazyLoad } from '../../components';
import avatar from '../../assets/images/avatar.png';

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className='skItem'>
        <div className='circle skeleton'></div>
        <div className='row skeleton'></div>
        <div className='row2 skeleton'></div>
      </div>
    );
  };

  return (
    <div className='castSection'>
      <ContentWrapper>
        <div className='sectionHeading'>Top Cast</div>
        {!loading ? (
          <div className='listItems'>
            {data?.map((item) => {
              let imgUrl = item?.profile_path
                ? url.profile + item?.profile_path
                : avatar;

              return (
                <div key={item.id} className='listItem'>
                  <div className='profileImg'>
                    <ImageLazyLoad src={imgUrl} />
                  </div>
                  <div className='name'>{item.name}</div>
                  <div className='character'>{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className='castSkeleton'>
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
      <ImageLazyLoad />
    </div>
  );
};

export default Cast;
