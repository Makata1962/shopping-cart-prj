import { useLoaderData } from 'react-router-dom';
import Card from '../features/product/Card';
import { CardProps, ProductsProps } from '../utils/interfaces';

function ProductList() {
  const products = useLoaderData() as ProductsProps;

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
