import Image from '../../ui/Image';
import Button from '../../ui/Button';
import line from '../../assets/line.svg';
import shoes from '../../assets/shoes.png';
import arrivals from '../../assets/arrivals.png';
import items from '../../assets/items.png';
import collections from '../../assets/collections.png';

function Highlights() {
  return (
    <div className='max-w-[1072px] m-auto'>
      <Button to='/product-list' type='nav'>
        <div className='flex flex-col justify-center items-center text-deep-blue text-4xl mb-12 hover:scale-95 transition duration-150 ease-in-out transform active:scale-95'>
          <h1 className='mb-5'>
            THIS WEEKS <br /> HIGHLIGHTS
          </h1>
          <Image src={line} alt='underline' />
        </div>
      </Button>
      <div className='grid grid-cols-3 grid-rows-3 gap-4 text-deep-gray text-4xl'>
        <div className='col-span-1 hover:scale-95 transition duration-500 ease-in-out transform active:scale-95'>
          <Button to='/product-list' type='nav'>
            <div
              style={{ backgroundImage: `url(${shoes})`, height: '383px' }}
              className=' relative flex justify-center items-center font-normal'
            >
              <span>
                Exclusive <br /> Shoes
              </span>
              <div className='absolute bottom-0 left-0 m-2 text-xs bg-black bg-opacity-30 w-[190px] h-[76px] flex flex-col items-start pl-3 pt-2'>
                <span>Exclusive Shoes</span>
                <span>Price 20% OFF</span>
                <span>DISCOUNT CODE -</span>
                <span>VATR-3920</span>
              </div>
            </div>
          </Button>
        </div>
        <div className='col-span-2 hover:scale-95 transition duration-500 ease-in-out transform active:scale-95'>
          <Button to='/product-list' type='nav'>
            <div
              style={{
                backgroundImage: `url(${collections})`,
                height: '383px',
              }}
              className='relative flex justify-center items-center font-normal'
            >
              <span>
                Exquisite Styles & <br /> Collections
              </span>
              <div className='absolute bottom-0 left-0 m-2 text-xs bg-black bg-opacity-30 w-[190px] h-[76px] flex flex-col items-start pl-3 pt-2'>
                <span>Exquisite Styles & Collections</span>
                <span>Price 20% OFF</span>
                <span>DISCOUNT CODE -</span>
                <span>VATR-3920</span>
              </div>
            </div>
          </Button>
        </div>
        <div className='col-span-2 hover:scale-95 transition duration-500 ease-in-out transform active:scale-95'>
          <Button to='/product-list' type='nav'>
            <div
              style={{ backgroundImage: `url(${arrivals})`, height: '383px' }}
              className='relative flex justify-center items-center font-normal'
            >
              <span>New Arrivals</span>
              <div className='absolute bottom-0 left-0 m-2 text-xs bg-black bg-opacity-30 w-[190px] h-[76px] flex flex-col items-start pl-3 pt-2'>
                <span>New Arrivals</span>
                <span>Price 20% OFF</span>
                <span>DISCOUNT CODE - </span>
                <span>VATR-3920</span>
              </div>
            </div>
          </Button>
        </div>
        <div className='col-span-1 hover:scale-95 transition duration-500 ease-in-out transform active:scale-95'>
          <Button to='/product-list' type='nav'>
            <div
              style={{ backgroundImage: `url(${items})` }}
              className='relative h-[383px] w-[400px] flex justify-center items-center font-normal'
            >
              <span className='absolute'>Exclusive Items</span>
              <div className='absolute bottom-0 left-0 m-2 text-xs bg-black bg-opacity-30 w-[190px] h-[76px] flex flex-col items-start pl-3 pt-2'>
                <span>Exclusive Items</span>
                <span>Price 20% OFF</span>
                <span>DISCOUNT CODE - </span>
                <span>VATR-3920</span>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
