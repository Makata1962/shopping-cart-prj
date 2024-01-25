import left from '../assets/navUnderline.svg';
import right from '../assets/payUnderline.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.png';
import amex from '../assets/amex.png';
import mastercard from '../assets/mastercard.png';
import visa from '../assets/visa.png';
import Image from './Image';
import Button from './Button';

function Footer() {
  return (
    <div className='h-[420px] bg-base-gray w-screen'>
      <div className='flex justify-between'>
        <div className='mt-9 mx-20'>
          <div className='mb-5'>Navigation</div>
          <Image src={left} alt='navigation underline' className='mb-5' />
          <nav className='flex flex-col text-deep-blue text-lg font-roboto mb-10'>
            <Button to='/product-list' type='nav'>
              products
            </Button>
            <Button to='/' type='nav'>
              categories
            </Button>
          </nav>
          <div className='flex justify-center items-center'>
            <Button to='https://www.facebook.com/ilo.pachulia98/' type='nav'>
              <Image src={facebook} alt='Facebook logo' className='mr-5' />
            </Button>
            <Button to='https://www.instagram.com/ilo_pachulia' type='nav'>
              <Image
                src={instagram}
                alt='Instagram logo'
                className='w-[30px] h-[30px]'
              />
            </Button>
          </div>
        </div>
        <div>
          <div className='mt-9 mx-20'>
            <div className='mb-5'>Payments</div>
            <Image src={right} alt='navigation underline' className='mb-5' />
            <div className='flex justify-between items-center gap-4'>
              <Image src={mastercard} alt='mastercard icon' />
              <Image src={visa} alt='visa icon' />
              <Image src={amex} alt='american express icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
