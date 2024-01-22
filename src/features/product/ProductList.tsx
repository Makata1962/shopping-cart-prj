import Card from './Card';
import { CardProps, ProductsProps } from '../../utils/interfaces';
import Button from '../../ui/Button';
import { useState } from 'react';
import { READ_MORE_CHUNK_SIZE } from '../../utils/constants';
import EmptyContent from '../../ui/EmptyContent';

function ProductList({ products, type }: ProductsProps) {
  const [chunkSize, setChunkSize] = useState(READ_MORE_CHUNK_SIZE);
  const [displayedProducts, setDisplayedProducts] = useState(
    products.slice(0, chunkSize)
  );

  const onReadMoreHandler = () => {
    const newChunkSize = chunkSize + READ_MORE_CHUNK_SIZE;
    setChunkSize(newChunkSize);
    setDisplayedProducts(products.slice(0, newChunkSize));
  };

  if (!products.length) return <EmptyContent />;

  if (type === 'small')
    return (
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-wrap gap-4 w-full mb-10'>
          {displayedProducts.map(({ id, title, image, price }: CardProps) => {
            return (
              <Card
                key={id}
                id={id}
                title={title}
                price={price}
                image={image}
              />
            );
          })}
        </div>
        {chunkSize < products.length && (
          <Button type='secondary' onClick={onReadMoreHandler}>
            Read More
          </Button>
        )}
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
