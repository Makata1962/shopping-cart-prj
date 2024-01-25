import Image from '../../ui/common/Image';
import Button from '../../ui/common/Button';
import { titleChecker } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import vector from '../../assets/vector.svg';
import { CardProps } from '../../utils/interfaces';
import {
  deleteFromCart,
  updateProductQuantity,
} from '../../slices/productSlice';
import { CloseOutlined } from '@ant-design/icons';

function ProductItem({ id, image, title, price, quantity = 1 }: CardProps) {
  const dispatch = useDispatch();

  const onQuantityIncrease = () => {
    dispatch(updateProductQuantity({ id, productQuantity: +1 }));
  };
  const onQuantityDecrease = () => {
    dispatch(updateProductQuantity({ id, productQuantity: -1 }));
  };

  const onCloseClick = () => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      <div className='w-[1280px] flex justify-start items-start my-10'>
        <Image src={image} alt={title} className='w-[220px] h-auto mr-10' />
        <div className='w-[200px] text-deep-ocean mr-10 mt-20 flex flex-col items-start'>
          <h1 className='text-left font-bold mb-7'>
            {titleChecker(title, 40)}
          </h1>
          <span className='font-semibold'>
            ₾ {price * (quantity as number)}
          </span>
        </div>
        <div className='text-deep-ocean mt-20'>
          <p className='mb-3'>Quantity</p>
          <div className='px-2 py-2 border-deep-ocean border-solid border-2 mb-14'>
            <Button
              onClick={onQuantityIncrease}
              className='text-deep-ocean text-2xl'
            >
              +
            </Button>
            <span className='px-5 text-deep-ocean text-2xl'>{quantity}</span>
            <Button
              onClick={onQuantityDecrease}
              className='text-deep-ocean text-2xl'
            >
              -
            </Button>
          </div>
        </div>
        <CloseOutlined onClick={onCloseClick} />
      </div>
      <Image src={vector} alt='underline' />
    </>
  );
}

export default ProductItem;
