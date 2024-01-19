import { CardProps } from '../../utils/interfaces';
import Image from '../../ui/Image';

function Card({ id, title, image, price }: CardProps) {
  return (
    <div className='w-[224px] h-[369px] flex flex-col items-center border border-gray-200'>
      <Image src={image} alt={title} className='w-full h-[258px] mb-3' />
      <div className='w-[200px]  text-[10px]'>
        <h6 className='mb-1.5 h-9'>{title}</h6>
        <div className='w-full flex justify-between items-center text-sm'>
          <span>$ {price}</span>
          <span>24 Orders</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
