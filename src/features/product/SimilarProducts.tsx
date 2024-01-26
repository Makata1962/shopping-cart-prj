import Spinner from '../../ui/common/Spinner';
import Error from '../../ui/common/Error';
import { useQuery } from '@tanstack/react-query';
import ProductList from './ProductList';
import { getProducts } from '../../services/apiProducts';

function SimilarProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;

  return (
    <div className='flex flex-col justify-center items-center px-10'>
      <h1 className='self-start text-deep-ocean font-medium text-lg mb-4'>
        Similar Products
      </h1>
      <ProductList products={products} type='small' />
    </div>
  );
}

export default SimilarProducts;
