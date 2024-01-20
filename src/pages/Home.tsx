import Image from '../ui/Image';
import Button from '../ui/Button';
import Carousel from '../ui/Carousel';
import woman from '../assets/woman.png';
import hanger from '../assets/hanger.png';

function Home() {
  return (
    <>
      <div className='relative'>
        <Image src={woman} alt='woman' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[730px] h-[349px] bg-light-grey flex flex-col justify-center items-center rounded-2xl'>
          <Image src={hanger} alt='hanger icon' className='mb-5' />
          <h1 className='text-4xl text-[#41587B] mb-7'>
            Start The Day <br /> With Closet.
          </h1>
          <Button to='/product-list' type='primary'>
            Discovery our collection
          </Button>
        </div>
      </div>
      <Carousel />
    </>
  );
}

export default Home;
