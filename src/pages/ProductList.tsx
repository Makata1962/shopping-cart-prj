import Card from '../features/product/Card';
import { CardProps } from '../utils/interfaces';
import { getProducts } from '../services/apiProducts';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../ui/Spinner';
import Error from '../ui/Error';
import { useSelector } from 'react-redux';
import { getCartProducts } from '../slices/productSlice';

function ProductList() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['product'],
    queryFn: getProducts,
  });

  // const cart = useSelector(getCartProducts);

  if (isLoading) return <Spinner />;

  if (error) return <Error message={error} />;

  return (
    <div className='flex flex-wrap gap-4'>
      {products.map(({ id, title, image, price }: CardProps) => {
        return (
          <Card key={id} id={id} title={title} price={price} image={image} />
        );
      })}
    </div>
  );
}

export default ProductList;
