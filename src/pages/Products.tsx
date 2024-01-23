import { useLoaderData } from 'react-router-dom';
import DisplayProducts from '../ui/DisplayProducts';
import { CardProps } from '../utils/interfaces';

function Products() {
  const products = useLoaderData() as Array<CardProps>;

  return <DisplayProducts products={products} />;
}

export default Products;
