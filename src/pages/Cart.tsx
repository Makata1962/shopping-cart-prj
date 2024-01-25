import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCart,
  getCartProducts,
  getTotalPrice,
} from '../slices/productSlice';

import { CardProps } from '../utils/interfaces';
import ProductItem from '../features/cart/ProductItem';
import EmptyContent from '../ui/EmptyContent';
import Button from '../ui/Button';

function Cart() {
  const products = useSelector(getCartProducts);
  const totalPrice = useSelector(getTotalPrice);
  const dispatch = useDispatch();

  const onClearClick = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);

  if (!products.length)
    return (
      <div className='h-screen'>
        <EmptyContent />
      </div>
    );

  return (
    <>
      <div className='mb-20'>
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
      </div>
      <div className='flex justify-between items-center'>
        <div className='text-4xl font-semibold text-[#3E5673]'>
          Total: ₾ {totalPrice.toFixed(2)}
        </div>
        <div className='self-end my-20'>
          <span className='mr-5'>
            <Button onClick={onClearClick} type='primary'>
              Clear Cart
            </Button>
          </span>
          <Button type='primary'>Checkout</Button>
        </div>
      </div>
    </>
  );
}

export default Cart;
