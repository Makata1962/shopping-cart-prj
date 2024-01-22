import Button from './Button';
import Image from './Image';
import closet from '../assets/closet.png';
import CartDropDown from '../features/cart/CartDropDown';
import AccountDropdown from './AccountDropdown';

function Header() {
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
        <AccountDropdown />
      </div>
    </div>
  );
}

export default Header;
