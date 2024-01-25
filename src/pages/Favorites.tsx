import { useSelector } from 'react-redux';
import { getFavoriteProducts } from '../slices/productSlice';
import DisplayProducts from '../ui/common/DisplayProducts';

function Favorites() {
  const favorites = useSelector(getFavoriteProducts);

  return <DisplayProducts products={favorites} />;
}

export default Favorites;
