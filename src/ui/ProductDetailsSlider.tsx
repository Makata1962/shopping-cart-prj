import Slider from 'react-slick';
import Image from './common/Image';
import { CardProps } from '../utils/interfaces';

function ProductDetailsSlider({ product }: { product: CardProps }) {
  const settings = {
    customPaging: function () {
      return (
        <a>
          <Image src={product.image} alt='catalog' />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='max-w-[500px] h-auto bg-red-300z]'>
      <Slider {...settings}>
        <Image src={product.image} alt={product.title} />
        <Image src={product.image} alt={product.title} />
        <Image src={product.image} alt={product.title} />
        <Image src={product.image} alt={product.title} />
      </Slider>
    </div>
  );
}

export default ProductDetailsSlider;
