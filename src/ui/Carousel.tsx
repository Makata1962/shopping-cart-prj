import Image from './Image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getImageSrc } from '../utils/helpers';
import { getCategories } from '../services/apiProducts';
import { useQuery } from '@tanstack/react-query';
import Spinner from './Spinner';
import Error from './Error';

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
};

function Carousel() {
  const {
    isLoading,
    data,
    error,
  } = useQuery({
    queryKey: ['product'],
    queryFn: getCategories,
  });
  const categories = [
    'Dress',
    'Jacket',
    'Trainers',
    'Glasses',
    ...(data || []),
  ];

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <div className='w-[950px] m-auto'>
      <div className='mt-20 px-5'>
        <Slider {...settings}>
          {categories.map((category) => (
            <div
              key={category}
              className='bg-white h-auto text-black rounded-xl'
            >
              <div className='h-56 flex flex-col justify-center items-center'>
                <Image
                  src={getImageSrc(category)}
                  className='h-auto w-44 mb-2'
                  alt={category}
                />
                <p className='text-xl font-medium	-tracking-tighter'>
                  {category}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
