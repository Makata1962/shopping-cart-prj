import Card from './Card';
import { CardProps, ProductsProps } from '../../utils/interfaces';

function ProductList({ products }: CardProps[]) {
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
