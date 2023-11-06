import { LazyLoadImage } from 'react-lazy-load-image-component';
import './ImageLazyLoad.scss';

const ImageLazyLoad = () => {
  return (
    <LazyLoadImage className={className || ''} alt='' effect='blur' src={src} />
  );
};

export default ImageLazyLoad;
