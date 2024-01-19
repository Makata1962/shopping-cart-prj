import Button from './Button';
import Image from './Image';
import closet from '../assets/closet.png';
import account from '../assets/account.svg';
import cart from '../assets/cart.svg';

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
        <Image src={account} alt='account icon' className='mr-4' />
        <Image src={cart} alt='cart icon' />
      </div>
    </div>
  );
}

export default Header;
