import { getCategories } from '../../services/apiProducts';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';
import Error from '../../ui/common/Error';
import { CategoriesContext } from '../../context/CategoriesContext';
import { useContext } from 'react';
import CarouselSlider from '../../ui/CarouselSlider';

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
        <CarouselSlider categories={categories} onClick={onClickHandler} />
      </div>
    </div>
  );
}

export default Carousel;
