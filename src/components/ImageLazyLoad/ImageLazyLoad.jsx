import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ImageLazyLoad.scss';

const ImageLazyLoad = () => {
  return (
    <LazyLoadImage className={className || ''} alt='' effect='blur' src={src} />
  );
};

export default ImageLazyLoad;
