import { useSelector } from 'react-redux';
import { getCartProducts } from '../slices/productSlice';

import { CardProps } from '../utils/interfaces';
import ProductItem from '../features/cart/ProductItem';
import EmptyContent from '../ui/EmptyContent';

function Cart() {
  const products = useSelector(getCartProducts);

  if (!products.length) return <EmptyContent />;

  return (
    <>
      {products.map(({ id, image, title, price, quantity }: CardProps) => (
        <ProductItem
          key={id}
          id={id}
          image={image}
          title={title}
          price={price}
          quantity={quantity}
        />
      ))}
    </>
  );
}

export default Cart;
