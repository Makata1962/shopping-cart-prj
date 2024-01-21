import Card from './Card';
import { CardProps, ProductsProps } from '../../utils/interfaces';

function ProductList({ products }: ProductsProps) {
  if (products.length === 0)
    return (
      <div className='flex justify-center items-center w-full h-full text-gray-400'>
        No matched products were found.
      </div>
    );

  return (
    <div className='flex flex-wrap gap-4 w-full'>
      {products.map(({ id, title, image, price }: CardProps) => {
        return (
          <Card key={id} id={id} title={title} price={price} image={image} />
        );
      })}
    </div>
  );
}

export default ProductList;
