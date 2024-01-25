import { ImageProps } from '../../utils/interfaces';

function Image({ src, alt, className }: ImageProps) {
  return <img src={src} alt={alt} className={`${className} object-cover`} />;
}

export default Image;
