import Image from '../../ui/common/Image';
import { titleChecker } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import vector from '../../assets/vector.svg';
import { CardProps } from '../../utils/interfaces';
import {
  deleteFromCart,
  updateProductQuantity,
} from '../../slices/productSlice';
import { CloseOutlined } from '@ant-design/icons';
import ProductQuantity from '../../ui/common/ProductQuantity';

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
          <ProductQuantity quantity={quantity} onQuantityIncrease={onQuantityIncrease} onQuantityDecrease={onQuantityDecrease}/>
        </div>
        <CloseOutlined onClick={onCloseClick} />
      </div>
      <Image src={vector} alt='underline' />
    </>
  );
}

export default ProductItem;
