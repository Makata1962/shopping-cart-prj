import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from './common/Image';
import Button from './common/Button';
import { getImageSrc } from '../utils/helpers';

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
};

function CarouselSlider({
  categories,
  onClick,
}: {
  categories: string[];
  onClick: (value: string) => void;
}) {
  return (
    <Slider {...settings}>
      {categories.map((category) => (
        <Button to='product-list' type='nav' key={category}>
          <div
            className='bg-white h-auto text-black rounded-xl transform transition-transform duration-500 hover:scale-110'
            onClick={() => onClick(category)}
          >
            <div className='h-56 flex flex-col justify-center items-center'>
              <Image
                src={getImageSrc(category)}
                className='h-auto w-44 mb-2'
                alt={category}
              />
              <p className='text-xl font-medium	-tracking-tighter'>{category}</p>
            </div>
          </div>
        </Button>
      ))}
    </Slider>
  );
}

export default CarouselSlider;
