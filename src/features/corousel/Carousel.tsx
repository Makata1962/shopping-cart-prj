import Image from '../../ui/Image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getImageSrc } from '../../utils/helpers';
import { getCategories } from '../../services/apiProducts';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';
import Error from '../../ui/Error';
import Button from '../../ui/Button';
import { CategoriesContext } from '../../context/CategoriesContext';
import { useContext } from 'react';

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
  const { isLoading, data, error } = useQuery({
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

  const { setSelectedCategories } = useContext(CategoriesContext);

  const onClickHandler = (category: string) => {
    setSelectedCategories((prevState) => [...prevState, category]);
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;

  return (
    <div className='w-[950px] m-auto mb-48'>
      <div className='mt-20 px-5'>
        <Slider {...settings}>
          {categories.map((category) => (
            <Button to='product-list' type='nav' key={category}>
              <div
                className='bg-white h-auto text-black rounded-xl'
                onClick={() => onClickHandler(category)}
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
            </Button>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
