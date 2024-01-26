import { ProductQuantityProps } from '../../utils/interfaces';
import Button from './Button';

function ProductQuantity({
  quantity,
  onQuantityIncrease,
  onQuantityDecrease,
}: ProductQuantityProps) {
  return (
    <>
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
    </>
  );
}

export default ProductQuantity;
