import { CardProps } from '../../utils/interfaces';
import Image from '../../ui/Image';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  deleteFromFavorite,
  getFavoriteProduct,
} from '../../slices/productSlice';
import { ProductState } from '../../utils/interfaces';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

function Card(product: CardProps) {
  const { id, title, image, price } = product;
  const dispatch = useDispatch();
  const addedToFavorite = useSelector((state: { product: ProductState }) => getFavoriteProduct(state, id));

  const onAddToFavoritesHandler = () => {
    dispatch(addToFavorite(product));
  };

  const onRemoveFromFavoriteHandler = () => {
    dispatch(deleteFromFavorite(id));
  };

  // Both heart icon had figma issues,
  // outlined icon's svg was empty
  // and filled heart icon has duplication
  // that's why I used ant design icons

  return (
    <div className='relative'>
      <Button to={`/product-list/${id}`} type='nav' disabled={false}>
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
      </Button>
      {!addedToFavorite && (
        <Button
          onClick={onAddToFavoritesHandler}
          className='absolute top-3 right-0 p-3'
        >
          <span className='w-3 h-3 p-3 bg-black bg-opacity-30 backdrop-blur-md'>
            <HeartOutlined />
          </span>
        </Button>
      )}
      {addedToFavorite && (
        <Button
          onClick={onRemoveFromFavoriteHandler}
          className='absolute top-3 right-0 p-3'
        >
          <span className='w-3 h-3 p-3 bg-black bg-opacity-30 backdrop-blur-md'>
            <HeartTwoTone twoToneColor='#eb2f96' />
          </span>
        </Button>
      )}
    </div>
  );
}

export default Card;
