import Button from './Button';
import Image from './Image';
import closet from '../assets/closet.png';
import CartDropDown from '../features/cart/CartDropdown';
import AccountDropdown from './AccountDropdown';
import { useSelector } from 'react-redux';
import { getFavoriteProducts } from '../slices/productSlice';
import favorite from '../assets/favorite.svg';
import redFavorite from '../assets/red-favorite.svg';
import { useState } from 'react';

function Header() {
  const [filtered, setFiltered] = useState(false);
  const favorites = useSelector(getFavoriteProducts);

  const onFavoriteHandler = () => {
    setFiltered((prev) => !prev);
  };

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
        {favorites.length > 0 && !filtered && (
          <>
            <span onClick={onFavoriteHandler}>
              <Image src={favorite} alt='heart icon' />
            </span>
          </>
        )}
        {filtered && favorites.length > 0 && (
          <span onClick={onFavoriteHandler}>
            <Image src={redFavorite} alt='red heart icon' />
          </span>
        )}
        <AccountDropdown />
      </div>
    </div>
  );
}

export default Header;
