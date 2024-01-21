import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../services/apiProducts';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import Error from '../ui/Error';

function ProductDetails() {
  const { productId } = useParams();
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ['productDetails'],
    queryFn: () => getProduct(productId as string),
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;

  console.log(product);

  return (
    <>
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
    </>
  );
}

export default ProductDetails;
