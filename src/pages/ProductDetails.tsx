import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getProduct, getProducts } from '../services/apiProducts';
import { useParams } from 'react-router-dom';
import Spinner from '../ui/Spinner';
import Error from '../ui/Error';
import Image from '../ui/Image';
import Button from '../ui/Button';
import Slider from 'react-slick';
import cart from '../assets/cart.svg';
import ProductList from '../features/product/ProductList';

function ProductDetails() {
  const { productId } = useParams();
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: [productId],
    queryFn: () => getProduct(productId as string),
  });
  const {
    isLoading: productsLoading,
    data: products,
    error: productsError,
  } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  const [quantity, setQuantity] = useState(0);

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error as string} />;
  if (productsLoading) return <Spinner />;
  if (productsError) return <Error message={error as string} />;

  const settings = {
    customPaging: function () {
      return (
        <a>
          <img src={product.image} />
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onAddProductToCartHandler = () => {
    console.log('adding to cart...');
  };

  const onQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const onQuantityDecrease = () => {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className='max-w-[1280px]'>
      <div className='flex justify-between items-center mb-20'>
        <div className='max-w-[500px] h-auto bg-red-300z]'>
          <Slider {...settings}>
            <div>
              <img src={product.image} />
            </div>
            <div>
              <img src={product.image} />
            </div>
            <div>
              <img src={product.image} />
            </div>
            <div>
              <img src={product.image} />
            </div>
          </Slider>
        </div>
        <div className='w-1/2 flex flex-col items-start'>
          <h3 className='font-bold mb-5'>{product.title}</h3>
          <h3 className='font-extrabold text-[#3E5673] mb-4'>
            ₾ {product.price}
          </h3>
          <p className='text-left font-semibold'>{product.description}</p>
          <p>Quantity</p>
          <div className='px-2 py-2 border-[#3E5673] border-solid border-2 mb-14'>
            <Button
              onClick={onQuantityIncrease}
              className='text-[#3E5673] text-2xl'
            >
              +
            </Button>
            <span className='px-5 text-[#3E5673] text-2xl'>{quantity}</span>
            <Button
              onClick={onQuantityDecrease}
              className='text-[#3E5673] text-2xl'
            >
              -
            </Button>
          </div>
          <div>
            <Button
              className='flex justify-between items-center px-14 py-2 border-[#3E5673] text-[#3E5673] transition duration-150 ease-in-out transform active:scale-95 hover:bg-gray-300 border-solid border-2 rounded mb-14'
              onClick={onAddProductToCartHandler}
            >
              <Image src={cart} alt='basket icon' className='px-2' />
              <span>+ Add to cart</span>
            </Button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center px-10'>
        <h1 className='self-start text-[#3E5673] font-medium text-lg mb-4'>Similar Products</h1>
        <ProductList products={products} type='small' />
      </div>
    </div>
  );
}

export default ProductDetails;
