import Button from './common/Button';
import Image from './common/Image';
import closet from '../assets/closet.png';
import CartDropDown from '../features/cart/CartDropdown';
import AccountDropdown from './AccountDropdown';
import { useSelector } from 'react-redux';
import { getFavoriteProducts } from '../slices/productSlice';
import favorite from '../assets/favorite.svg';
import redFavorite from '../assets/red-favorite.svg';
import { useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();
  const favorites = useSelector(getFavoriteProducts);

  return (
    <div className='w-full h-[75px] flex justify-between items-center px-20'>
      <Button to='/' type='nav'>
        <Image
          src={closet}
          alt='closet'
          className='w-[125px] h-[34px] hover:cursor-pointer'
        />
      </Button>
      <nav className='w-[275px] flex justify-between items-center'>
        <Button to='/product-list' type='nav'>
          Discovery
        </Button>
        <Button to='/about' type='nav'>
          About
        </Button>
        <Button to='/contact' type='nav'>
          Contact
        </Button>
      </nav>
      <div className='flex justify-center items-center hover:cursor-pointer'>
        <CartDropDown />
        {favorites.length > 0 && pathname !== '/favorites' && (
          <Button to='/favorites' type='nav'>
            <Image src={favorite} alt='heart icon' />
          </Button>
        )}
        {pathname === '/favorites' && favorites.length > 0 && (
          <Button to='/favorites' type='nav'>
            <Image src={redFavorite} alt='red heart icon' />
          </Button>
        )}
        <AccountDropdown />
      </div>
    </div>
  );
}

export default Header;
