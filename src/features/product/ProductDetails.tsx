import { useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../services/apiProducts';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../slices/productSlice';
import Spinner from '../../ui/common/Spinner';
import Error from '../../ui/common/Error';
import ProductDetailsSlider from '../../ui/ProductDetailsSlider';
import ProductQuantity from '../../ui/common/ProductQuantity';
import Button from '../../ui/common/Button';
import Image from '../../ui/common/Image';
import cart from '../../assets/cart.svg';

function ProductDetails() {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: [productId],
    queryFn: () => getProduct(productId as string),
  });

  useEffect(() => {
    setQuantity(1);
  }, [productId]);

  const onAddProductToCartHandler = useCallback(() => {
    dispatch(addToCart({ ...product, quantity: quantity }));
  }, [dispatch, product, quantity]);

  const onQuantityIncrease = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);
  const onQuantityDecrease = useCallback(() => {
    if (quantity === 1) return;
    setQuantity((prev) => prev - 1);
  }, [quantity]);

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;

  return (
    <div className='flex justify-between items-center mb-20'>
      <ProductDetailsSlider product={product} />
      <div className='w-1/2 flex flex-col items-start'>
        <h3 className='font-bold mb-5'>{product.title}</h3>
        <h3 className='font-extrabold text-deep-ocean mb-4'>
          ₾ {product.price * quantity}
        </h3>
        <p className='text-left font-semibold mb-5'>{product.description}</p>
        <ProductQuantity
          quantity={quantity}
          onQuantityIncrease={onQuantityIncrease}
          onQuantityDecrease={onQuantityDecrease}
        />
        <div>
          <Button
            className='flex justify-between items-center px-14 py-2 border-deep-ocean text-deep-ocean transition duration-150 ease-in-out transform active:scale-95 hover:bg-gray-300 border-solid border-2 rounded mb-14'
            onClick={onAddProductToCartHandler}
          >
            <Image src={cart} alt='basket icon' className='px-2' />
            <span>+ Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
